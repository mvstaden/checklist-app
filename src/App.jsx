function App() {
  return (
    <div className="bg-slate-600 w-[450px] p-5 rounded-xl flex flex-col">
      <h1 className="text-5xl text-white text-center  border-b-2">
        Checkilist
      </h1>
      <div className="bg-lime-100 mt-4 h-[500px]  flex justify-center items-center">
        <a
          href=""
          className="border-black rounded-full text-2xl w-7 h-7 flex items-center justify-center ">
          <span className="">+</span>
        </a>
      </div>
    </div>
  );
}

export default App;
