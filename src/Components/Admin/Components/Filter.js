function CategorySelect(){
    return <>
  <div className="form-group mr-3">
            <label htmlFor="custom-select" className="form-label mr-1">Category</label>
            <select id="custom-select" className="form-control custom-select" style={{"width":"200px"}}>
              <option selected>All categories</option>
              <option value={1}>Vue.js</option>
              <option value={2}>Node.js</option>
              <option value={3}>GitHub</option>
            </select>
          </div>
    </>
}
function PublishSelect(){
    return <>
   <div className="form-group">
            <label htmlFor="published01" className="form-label mr-1">Published</label>
            <select id="published01" className="form-control custom-select" style={{"width":"200px"}}>
              <option selected>Published</option>
              <option value={1}>Draft</option>
              <option value={3}>All</option>
            </select>
          </div>
    </>
}




export default function Filter() {
    return <>
         <div className="form-inline ml-auto">
        <CategorySelect />
        <PublishSelect />
        
        </div>
    </>
}