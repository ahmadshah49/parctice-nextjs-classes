import Image from 'next/image'
import BillList from './components/BillList/BillList'
import CreateBill from './components/CreateBill/CreateBill'
import Button from './components/Button/Button'

export default function Home() {
  return (
    <>
      <h1 className="w-full text-center py-4 bg-red-500 text-white text-4xl font-extrabold">
        {" "}
        Crud Application
      </h1>
      <div className="mx-8">
        <BillList />
        <Button title={"Create Bill"} />
      </div>
    </>
  );
}
