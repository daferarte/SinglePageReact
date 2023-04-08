import React from "react";
import { useForm } from "react-hook-form";

let VideosForm = (props) => {
    let { register, handleSubmit } = useForm();
    let onSubmit = async (video) => {
        let formData = new FormData();

        formData.append('title',video.title);
        formData.append('video',video.video[0]);

        console.log(formData);
    }
    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
            <input type="text" name="title" {...register("title")} id="" placeholder="Titulo" />
            <input type="file" name="video" {...register("video")} id="" />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default VideosForm;