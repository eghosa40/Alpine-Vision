"use client"

import * as React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import {
    Sidebar,
    SidebarContent,
} from "src/components/ui/sidebar"
import { Button } from "src/components/ui/button"
import { Tabs, TabsContent } from "src/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "src/components/ui/card"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Package, ShoppingCart, Users, Settings, LogOut } from "lucide-react"
import ProductsManagement from "src/components/ProductManagement"
import { Toaster } from "src/components/ui/toaster"
import { useToast } from "src/components/ui/use-toast"

export default function AdminDashboard() {
    const { currentUser, isAdmin, logout } = useAuth()
    const navigate = useNavigate()
    const { toast } = useToast()
    const [activeTab, setActiveTab] = useState("overview")

    // Check if user is admin, if not redirect to home
    React.useEffect(() => {
        if (!isAdmin()) {
            toast({
                variant: "destructive",
                title: "Access Denied",
                description: "You don't have permission to access the admin dashboard.",
            })
            navigate("/")
        }
    }, [isAdmin, navigate, toast])

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar className="border-r border-gray-200">
                <SidebarHeader className="border-b border-gray-200 p-4">
                    <h2 className="text-xl font-bold">Admin Dashboard</h2>
                    <p className="text-sm text-gray-500">Welcome, {currentUser?.name}</p>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={() => setActiveTab("overview")} isActive={activeTab === "overview"}>
                                <BarChart className="h-5 w-5 mr-2" />
                                <span>Overview</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={() => setActiveTab("products")} isActive={activeTab === "products"}>
                                <Package className="h-5 w-5 mr-2" />
                                <span>Products</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={() => setActiveTab("orders")} isActive={activeTab === "orders"}>
                                <ShoppingCart className="h-5 w-5 mr-2" />
                                <span>Orders</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={() => setActiveTab("users")} isActive={activeTab === "users"}>
                                <Users className="h-5 w-5 mr-2" />
                                <span>Users</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={() => setActiveTab("settings")} isActive={activeTab === "settings"}>
                                <Settings className="h-5 w-5 mr-2" />
                                <span>Settings</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter className="border-t border-gray-200 p-4">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-500 hover:text-gray-900"
                        onClick={handleLogout}
                    >
                        <LogOut className="h-5 w-5 mr-2" />
                        <span>Logout</span>
                    </Button>
                </SidebarFooter>
            </Sidebar>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-6">
                    <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
                        <TabsContent value="overview" className={activeTab === "overview" ? "block" : "hidden"}>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                                        <Package className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">142</div>
                                        <p className="text-xs text-muted-foreground">+12 from last month</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">87</div>
                                        <p className="text-xs text-muted-foreground">+23% from last month</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">573</div>
                                        <p className="text-xs text-muted-foreground">+9% from last month</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Sales Overview</CardTitle>
                                        <CardDescription>Monthly sales performance</CardDescription>
                                    </CardHeader>
                                    <CardContent className="h-80 flex items-center justify-center">
                                        <div className="text-center text-gray-500">
                                            <LineChart className="h-16 w-16 mx-auto mb-2" />
                                            <p>Sales chart will be displayed here</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Product Categories</CardTitle>
                                        <CardDescription>Distribution by category</CardDescription>
                                    </CardHeader>
                                    <CardContent className="h-80 flex items-center justify-center">
                                        <div className="text-center text-gray-500">
                                            <PieChart className="h-16 w-16 mx-auto mb-2" />
                                            <p>Category distribution chart will be displayed here</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="products" className={activeTab === "products" ? "block" : "hidden"}>
                            <ProductsManagement />
                        </TabsContent>

                        <TabsContent value="orders" className={activeTab === "orders" ? "block" : "hidden"}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Orders Management</CardTitle>
                                    <CardDescription>View and manage customer orders</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-center h-64">
                                        <p className="text-gray-500">Order management will be implemented in future updates</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="users" className={activeTab === "users" ? "block" : "hidden"}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>User Management</CardTitle>
                                    <CardDescription>View and manage user accounts</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-center h-64">
                                        <p className="text-gray-500">User management will be implemented in future updates</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="settings" className={activeTab === "settings" ? "block" : "hidden"}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Settings</CardTitle>
                                    <CardDescription>Manage your dashboard settings</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-center h-64">
                                        <p className="text-gray-500">Settings will be implemented in future updates</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            <Toaster />
        </div>
    )
}

