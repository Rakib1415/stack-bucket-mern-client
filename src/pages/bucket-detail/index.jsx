import Create from '../components/create';
import Nav from '../components/nav';
import Table from '../components/table';

function BucketDetailPage() {
    return (
        <div>
            {/* Navigation Bar  */}
            <Nav />
            {/* Main Page Content */}
            <main className="container __margin--ylg">
                {/* Add Item */}
                <Create extra label="Add New Item" />
                {/* Item Table */}
                <section className="section table __shadow--sm">
                    <Table />
                </section>
                {/* Item Completed Table */}
                <section className="section table table--success __shadow--sm">
                    <Table />
                </section>
            </main>
        </div>
    );
}
export default BucketDetailPage;
