import { tableData as data } from "./data";
import bg from "../src/assets/bg.jpg";
import darkBg from "../src/assets/dark-bg.jpg";
import Header from "./Components/Header";
import Status from "./Components/Status";
import Name from "./Components/Name";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <main
      className="flex h-screen justify-center items-center"
      style={{ backgroundImage: `url(${!isDark ? bg : darkBg})` }}
    >
      <section className="lg:w-6/12 md:w-[90%] md:text-sm sm:w-[90%] sm:text-sm bg-white/30 p-5 rounded-xl backdrop-filter backdrop-blur-lg dark:bg-blue-900/10 dark:text-white">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <table className="w-full mt-4 table-auto">
          <thead>
            <tr className="flex justify-between bg-white/40 dark:bg-blue-900/40 rounded-md p-2 ">
              <th>ID</th>
              <th>Name</th>
              <th>Order Date</th>
              <th className=" flex relative left-4">Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="space-y-2 flex flex-col mt-4">
            {data.map((item) => (
              <tr
                className="flex justify-between items-center p-2 rounded-md cursor-pointer 
              hover:bg-blue-300 hover:font-semibold hover:scale-110 
              transition-all ease-in-out dark:hover:bg-blue-800 dark:hover:text-black"
              >
                <td className="pl-1">{item.id}</td>
                <td className=" w-32 text-nowrap pl-8 flex relative left-[-40px]">
                  <Name name={item.customer} url={item.imgUrl} />
                </td>
                <td className=" w-28">{item.orderDate}</td>
                <td className="w-28">
                  <Status status={item.status} />
                </td>
                <td className="flex relative justify-end w-12 font-bold">
                  ${item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default App;
