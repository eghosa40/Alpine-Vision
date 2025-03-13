"use client"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "src/components/ui/card"
import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"
import { useToast } from "src/components/ui/use-toast"
import { Plus, Search } from "lucide-react"
import ProductTable from "src/components/ProductTable"
import ProductForm from "src/components/ProductForm"
import DeleteModal from "src/components/DeleteModal"

export default function ProductsManagement() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [showAddForm, setShowAddForm] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [productToDelete, setProductToDelete] = useState(null)
    const { toast } = useToast()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch("http://localhost:8080/products")

                if (!response.ok) {
                    throw new Error("Failed to fetch products")
                }

                const data = await response.json()
                setProducts(data)
            } catch (err) {
                setError(err.message)
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: err.message,
                })
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [toast])

    // Filter products based on search term
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    // Handle product creation
    const handleAddProduct = async (productData) => {
        try {
            const response = await fetch("http://localhost:8080/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            })

            if (!response.ok) {
                throw new Error("Failed to add product")
            }

            const newProduct = await response.json()
            setProducts([...products, newProduct])
            setShowAddForm(false)

            toast({
                title: "Success",
                description: "Product added successfully",
            })
        } catch (err) {
            toast({
                variant: "destructive",
                title: "Error",
                description: err.message,
            })
        }
    }

    // Handle product update
    const handleUpdateProduct = async (productData) => {
        try {
            const response = await fetch(`http://localhost:8080/products/${productData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            })

            if (!response.ok) {
                throw new Error("Failed to update product")
            }

            const updatedProduct = await response.json()
            setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)))
            setEditingProduct(null)

            toast({
                title: "Success",
                description: "Product updated successfully",
            })
        } catch (err) {
            toast({
                variant: "destructive",
                title: "Error",
                description: err.message,
            })
        }
    }

    // Handle product deletion
    const handleDeleteProduct = async () => {
        if (!productToDelete) return

        try {
            const response = await fetch(`http://localhost:8080/products/${productToDelete.id}`, {
                method: "DELETE",
            })

            if (!response.ok) {
                throw new Error("Failed to delete product")
            }

            setProducts(products.filter((p) => p.id !== productToDelete.id))
            setDeleteModalOpen(false)
            setProductToDelete(null)

            toast({
                title: "Success",
                description: "Product deleted successfully",
            })
        } catch (err) {
            toast({
                variant: "destructive",
                title: "Error",
                description: err.message,
            })
        }
    }

    // Open edit form
    const handleEdit = (product) => {
        setEditingProduct(product)
        setShowAddForm(false)
    }

    // Open delete confirmation
    const handleDelete = (product) => {
        setProductToDelete(product)
        setDeleteModalOpen(true)
    }

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Products Management</CardTitle>
                        <CardDescription>Add, edit, and manage your products</CardDescription>
                    </div>
                    <Button
                        onClick={() => {
                            setShowAddForm(true)
                            setEditingProduct(null)
                        }}
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                    </Button>
                </CardHeader>
                <CardContent>
                    {/* Search Bar */}
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Products Table */}
                    <ProductTable
                        products={filteredProducts}
                        loading={loading}
                        error={error}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </CardContent>
            </Card>

            {/* Add/Edit Product Form */}
            {(showAddForm || editingProduct) && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
                        <ProductForm
                            product={editingProduct}
                            onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
                            onCancel={() => {
                                setShowAddForm(false)
                                setEditingProduct(null)
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            <DeleteModal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteProduct}
                title="Delete Product"
                description={`Are you sure you want to delete "${productToDelete?.name}"? This action cannot be undone.`}
            />
        </>
    )
}

