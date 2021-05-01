import {Link} from 'react-router-dom';

export default function EmptyPage() {
    return (
        <>
            <h1>This page is not available</h1>
            <Link to="/">back</Link>
        </>
        
    );
}