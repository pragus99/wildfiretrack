import spinner from './spinner.gif'

const Loader() {
    return (
        <div className="Loader">
            <img src={spinner} alt="loading" />
            <h1>Fecthing Data</h1>
        </div>
    )
}

export default Loader
