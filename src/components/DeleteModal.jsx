"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "src/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"

export default function DeleteModal({ isOpen, onClose, onConfirm, title, description }) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm} className="bg-red-500 hover:bg-red-600 text-white">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                    </AlertDialogAction>
            </AlertDialogContent>
        </AlertDialog>
    )
}

