import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { chirp } from "../types";

const AddChirp: React.FC<IAddChirpProps> = (props: IAddChirpProps) => {
    const [chirp, setChirp] = React.useState<chirp>({
        name: "",
        content: ""
    });

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setChirp({
        name: e.target.value,
        content: chirp.content
    });

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setChirp({
        name: chirp.name,
        content: e.target.value
    });

    const saveChirp = async () => {
        await fetch("/api/chirps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chirp)
        });

        props.history.push("/");
    }

    return (
        <div className="container">
            <div className="card shadow-lg m-2">
                <div className="card-body">
                    <div className="row">
                        <input type="text" className="card-title" defaultValue="" onChange={onNameChange}/>
                    </div>
                    <div className="row">
                        <textarea className="card-text" defaultValue={chirp.content} cols={50} rows={15} onChange={onContentChange}></textarea>
                    </div>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={saveChirp}>Save</button>
                </div>
            </div>
        </div>
    )
}

interface IAddChirpProps extends RouteComponentProps { }

export default AddChirp