// import { create } from "zustand";

// const useProductsStore = create((set) => ({
//   count: 0,
//   addOne: () => set((state) => ({ count: state.count + 1 })),
//   clearCount: () => set({ count: 0 }),
// }));

// function ZustandV1() {
//   const count = useProductsStore((state) => state.count);
//   const addOne = useProductsStore((state) => state.addOne);
//   const clearCount = useProductsStore((state) => state.clearCount);

//   return (
//     <div>
//       <div>Zustand V1</div>
//       <div>Count: {count}</div>
//       <button onClick={addOne}>Click to Add</button>
//     </div>
//   );
// }

// export default ZustandV1;
