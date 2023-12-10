// import { create } from "zustand";
// import { shallow } from "zustand/shallow";

// const useProductsStore = create((set) => ({
//   count: 0,
//   addOne: () => set((state) => ({ count: state.count + 1 })),
//   clearCount: () => set({ count: 0 }),
// }));

// function ZustandV2() {
//   const { count, addOne, clearCount } = useProductsStore(
//     (state) => ({
//       count: state.count,
//       addOne: state.addOne,
//       clearCount: state.clearCount,
//     }),
//     shallow
//   );

//   return (
//     <div>
//       <div>Count: {count}</div>
//       <button onClick={addOne}>Click me to add</button>
//       <button onClick={clearCount}>Clear count</button>
//     </div>
//   );
// }

// export default ZustandV2;
