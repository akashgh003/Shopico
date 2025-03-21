import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";
import NotAuthorize from "../../../components/notauthorize/NotAuthorize";
import { useEffect } from "react";

function Dashboard() {
  const user1 = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("user"));
  const context = useContext(myContext);
  const { mode, product, order, user } = context;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let totalPriceForAllOrders = 0;

  // Loop through each order
  order.forEach((order) => {
    let temp = 0;

    // Loop through each item in the cart and sum up the prices
    order.cartItems.forEach((cartItem) => {
      temp += parseInt(cartItem.price);
    });

    totalPriceForAllOrders += temp;
  });

  return (
    <Layout>
      {admin?.user?.email === "akashghosh1906@gmail.com" || "testAdmin@gmail.com"? (
        <section className="text-gray-600 body-font mt-10 mb-10">
          <div className="container px-5 mx-auto mb-10">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-purple-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaUserTie size={50} />
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {product.length}
                  </h2>
                  <p
                    className=" text-purple-500  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Products
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-purple-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaUserTie size={50} />
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {order.length}
                  </h2>
                  <p
                    className=" text-purple-500  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Orders
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-purple-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaUserTie size={50} />
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {user.length}
                  </h2>
                  <p
                    className=" text-purple-500  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Users
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-purple-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaUserTie size={50} />
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ${totalPriceForAllOrders}
                  </h2>
                  <p
                    className=" text-purple-500  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DashboardTab />
        </section>
      ) : (
        <NotAuthorize />
      )}
    </Layout>
  );
}

export default Dashboard;
