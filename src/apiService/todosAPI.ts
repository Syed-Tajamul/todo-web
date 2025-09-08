/**
 * Project MockEx
 *
 * @author      Syed Tajamul
 * @copyright   Eonyx Infotech LLP.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import axios from "axios";

const getAllTodos = async () => (await axios.get("/")).data;

const addTodos = async (todo: { id: string; title: string; description?: string }) => (await axios.post("/todos", { ...todo })).data;

export default { getAllTodos, addTodos };
