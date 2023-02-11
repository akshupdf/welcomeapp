import axios from "axios"
import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';





function Datalist () {

    const [data,getData] = useState<any[]>([])
    const url = "https://jsonplaceholder.typicode.com/posts" 
    const getAll = () =>{ 
        axios.get(url).then((res)=>{
        getData(res.data)
    })
    }

    useEffect(()=>{
        getAll();
    },[]);

    

    const columns = [
        {field:"id", headerName:"ID" , width: 90},
        {field:"title", headerName:"Title" , width: 250},
        {field:"body", headerName:"Body" , width: 300}
    ];

    const rows = data.map((row) => ({
        id: row.id,
        title: row.title,
        body: row.body
    }))
       
    

    return (
        <div style={{height: 500, width: 800}}>
            <DataGrid 
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}

            />
            
        </div>
    )

}

export default Datalist