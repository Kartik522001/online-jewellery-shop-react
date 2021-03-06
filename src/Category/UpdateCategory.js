import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Header from '../Admin_Componant/Header';
// import Menu from '../Admin_Componant/Menu';

export const UpdateCategory = () => {
    var id = useParams().categoryId;
    console.log("Id--", id);

    const [data, setdata] = useState('')
    const [categoryName, setcategoryName] = useState(data.categoryName)
    const [img, setimg] = useState(data.img);

    const getData = () => {
        axios.get(`http://localhost:4001/categorys/${id}`).then((res) => {
            setdata(res.data.data);
            console.log("--", res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update = (e) => {
        var updatedData = {
            categoryName: categoryName,
            img: img
        };
        e.preventDefault();

        axios.put(`http://localhost:4001/categorys/${id}`, updatedData).then((res) => {
            alert('Data Updated.....');
        });
    };

    return (
        <div>
            {/* <Header /> */}
            {/* <Menu /> */}
            <div className=" content-wrapper card-body">
                <h1>This is Update Category </h1>
                <form onSubmit={update}>
                    <div class="form-group">
                        <label>Category Name</label>
                        <input
                            type="text"
                            class="form-control"
                            defaultValue={data.categoryName}
                            onChange={(e) => setcategoryName(e.target.value)}
                        />
                        <br />
                        <input
                            type="text"
                            class="form-control"
                            defaultValue={data.img}
                            onChange={(e) => setimg(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
