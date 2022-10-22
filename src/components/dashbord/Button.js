

export const Button = ({setShowForm}) => {
  return (
    <section>
      <button onClick={()=>setShowForm(true)}
        class="inline-flex items-center rounded-lg justify-center bg-gray-900 py-2 px-4 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-4 xl:px-6"
      >
        Add new Product
      </button>
    </section>
  );
};
