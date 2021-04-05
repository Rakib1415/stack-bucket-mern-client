import Create from '../components/create';
import Nav from '../components/nav';
import Table from '../components/table';

function BucketPage() {
    return (
        <div>
            {/* Navigation Bar  */}
            <Nav />
            {/* Main page content */}
            <main className="container __margin--ylg">
                {/* Add New Bucket */}
                <Create label="Create New Bucket" />
                {/* Bucket List Table */}
                <div className="section table __shadow--sm">
                    <Table />
                </div>
            </main>
        </div>
    );
}
export default BucketPage;
