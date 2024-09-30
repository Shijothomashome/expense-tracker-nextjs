"use client";

import addTransaction from "@/app/actions/addTransaction";

const AddTransaction = () => {
  const clientAction = async (formaData: FormData) => {
    const {data, error} = await addTransaction(formaData);

    if (error) {
      alert(error);
    } else {
      alert("Transaction added successfully");
    }
  };

  return (
    <div>
      <form action={clientAction}>
        <div className="form_control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form_control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount..."
            step="0.01" // will allow decimals
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;  