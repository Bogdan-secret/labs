import {db} from "../database/firebase";
import {addDoc, collection, getDocs, updateDoc, deleteDoc, doc} from "firebase/firestore";

export const addExpense = async (expense) => {
    try {
        const docRef = await addDoc(collection(db, 'expenses'), expense);
        return { id: docRef.id, ...expense };
    } catch (error) {
        console.error("Error adding expense: ", error);
        throw error;
    }
};

export const getExpenses = async () => {
    try {
        const expensesCol = collection(db, 'expenses');
        const expenseSnapshot = await getDocs(expensesCol);
        return expenseSnapshot.docs.map((doc) => ({
            id: doc.id, 
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching expenses: ", error);
        return [];
    }
};

export const updateExpense = async (id, updatedExpense) => {
    try {
        const expenseDocRef = doc(db, 'expenses', id);
        await updateDoc(expenseDocRef, updatedExpense);
        return { id, ...updatedExpense };
    } catch (error) {
        console.error("Error updating expense: ", error);
        throw error;
    }
};

export const deleteExpense = async (id) => {
    try {
        const expenseDocRef = doc(db, 'expenses', id);
        await deleteDoc(expenseDocRef);
        return id;
    } catch (error) {
        console.error("Error deleting expense: ", error);
        throw error;
    }
};