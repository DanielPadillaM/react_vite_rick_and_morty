const NavPage = ({page,setPage})=>{

    return(
        <div className="d-flex justify-content-between align-items-center">
            <p>page:{page}</p>
            <button 
            disabled={page == 1}
            className="btn btn-primary btn-sm"
            onClick={()=>setPage(page-1)}
            >
                Page {page <= 1 ? page: page-1}
            </button>
            <button 
            className="btn btn-primary btn-sm"
            onClick={()=>setPage(page+1)}
            >
                Page {page+1}
            </button>
        </div>
    )
}

export default NavPage;