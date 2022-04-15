import axios from "axios";
import React, { useState } from "react";
// import Header from "../Admin_Componant/Header";
// import Menu from "../Admin_Componant/Menu";

export const AddCategory = () => {
    const [categoryName, setcategoryName] = useState("");
    const [img, setimg] = useState("");

    var Data = {
        categoryName: categoryName,
        img: img
    };

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/categorys", Data).then((res) => {
            console.log(res.status);
            console.log(res.data);
            alert("Category Added....");
        });
    };
    return (
        <div>
            {/* <Header /> */}
            {/* <Menu /> */}
            <div className=" content-wrapper card-body">
                <h1>Add Category :- </h1>

                <form onSubmit={submit}>
                    <div className=" form-group">
                        <label>Category Name</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Product Category Name "
                            onChange={(e) => setcategoryName(e.target.value)}
                        />
                        <input
                            type="text"
                            class="form-control"
                            onChange={(e) => setimg(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>
            </div>
        </div>
    );
};
