import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getShoppingList(userId) {
  try {
    const items = [];
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.log("error getting shopping list");
  }
}
async function addItem(userId, item) {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
  } catch (error) {
    console.log("error adding item");
  }
}
export { getShoppingList, addItem };
