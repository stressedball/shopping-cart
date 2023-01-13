export default function Shopping(){
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    return(
        <div className='content' role='shopping'>
            OMG SO MUCH CONTENT
            {/* Here should go all the shopping items */}
            {/* Each one of them should have a path */}
            {/* Need to link them to the shopping cart itself */}
        </div>
    )
}
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}    