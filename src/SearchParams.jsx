import { useState } from "react";

const SearchParams = () => {
    console.log("Search Called");
    const [location, setLocation] = useState('');
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={e => setLocation(e.target.value)} id="location" placeholder="Location" value={location} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;
