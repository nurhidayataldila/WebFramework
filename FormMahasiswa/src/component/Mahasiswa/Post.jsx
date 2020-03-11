import React from "react";

const Post = (mhs) => {
    return (
        <div className="artikel">
            <div className="konten-artikel">
                <div className="judul-artikel">NIM : {mhs.nim}</div>
                <p className="isi-artikel">
                    Nama : {mhs.nama}<br/>
                    Alamat : {mhs.alamat}<br/>
                    Hp : {mhs.hp}<br/>
                    Angkatan : {mhs.angkatan}<br/>
                    Status : {mhs.status}
                </p>
                <button className="btn btn-sm btn-warning" onClick={mhs.hapusMahasiswa}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;