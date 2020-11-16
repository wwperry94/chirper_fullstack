import React from 'react';
import { RouteComponentProps, useParams } from "react-router-dom";
import { chirp } from "../types";


const SingleChirp: React.FC<ISingleChirpProps> = (props: ISingleChirpProps) => {
    const { id } = useParams()
    const [chirp, setChirp] = React.useState<chirp>({
        id: "",
        name: "",
        content: ""
    });


    const deleteChirp = async (id: string) => {
        await fetch(`/api/chirps/${id}`, {
            method: "DELETE"
        });

        props.history.push("/");
    };

    const editChirp = async (id: string) => {
        const newChirp = {
            name: chirp.name,
            content: chirp.content
        }

        await fetch(`/api/chirps/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChirp)
        });

        props.history.push("/");
    };


    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setChirp({
        id: chirp.id,
        name: chirp.name,
        content: e.target.value
    });

    React.useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/chirps/${id}`);
                let chirp = await res.json();
                setChirp(chirp);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <div className="container">
            <div className="card shadow-lg m-2">
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-title">@{chirp.name}</h5>
                    </div>
                    <div className="row">
                        <textarea className="card-text" defaultValue={chirp.content} cols={50} rows={15} onChange={(e) => onMessageChange(e)}></textarea>
                    </div>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => editChirp(chirp.id)}>Save</button>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => deleteChirp(chirp.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

interface ISingleChirpProps extends RouteComponentProps<{ id: string }> { }

export default SingleChirp;