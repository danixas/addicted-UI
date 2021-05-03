import axios from "../axiosConfig";

const getAllBets = async () => axios.get("/bets");

const addNewBet = async(betData) => axios.post("/bets", betData);

const updateBet = async(id, betData) => axios.put(`/bets/${id}`, betData);

const deleteBet = async(id) => axios.delete(`/bets/${id}`);

const deleteBetOption = async(betId, optionId) => axios.delete(`/bets/${betId}/options/${optionId}`);

export {
    getAllBets,
    addNewBet,
    updateBet,
    deleteBet,
    deleteBetOption,
};
