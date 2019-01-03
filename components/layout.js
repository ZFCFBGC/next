import Header from "./header.js";
const layoutStyle = {
    padding:20,
    border:'1px solid #ccc',
};
const Layout =(props)=>(
    <div style={layoutStyle}>
        {/* <Header/> */}
        {/* <div>测试</div> */}
        {props.children}
    </div>
)
export default Layout