import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddTour = () => {
    const { register,  reset, handleSubmit, formState: { errors } } = useForm();
    const handleAddDoctor = data => {
        console.log(data);
        axios.post('https://tourism-website-server.vercel.app/tour', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className='w-96 p-7'>
        <h2 className="text-4xl">Add A Tour</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Description</span></label>
                <input type="description" {...register("description", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Cost</span></label>
                <input type="cost" {...register("cost", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.cost && <p className='text-red-500'>{errors.cost.message}</p>}
            </div>
       
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Photo</span></label>
                <input type='img'  {...register("image")} className='input input-bordered w-full max-w-xs' placeholder="Image url" />
                
                {/* <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.image && <p className='text-red-500'>{errors.image.message}</p>} */}
            </div>
            <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
        </form>
    </div>
    );
};

export default AddTour;