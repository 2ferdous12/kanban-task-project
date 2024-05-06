import React, { useState } from 'react';

const CreateBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBoard = (e) => {
    e.preventDefault();
    // Logic to handle board creation
    // After board is created, close the modal
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="mx-auto">
      <div
        onClick={openModal}
        className="cursor-pointer flex items-center text-xl f md:pl-3 pb-1 font-semibold pl-1 lg:pl-4
         w-[200px] md:w-[240px] lg:w-[270px] rounded-r-full h-[50px]
          text-[#635FC7] hover:text-[#635FC7] hover:bg-[#F4F7FD]"
      >
        <img className="pr-3 text-[#635FC7]" src="/images/fluent_board-split-24-regular (1).png" alt="" />
        + Create New Board
      </div>

      {isOpen && (
        <dialog id="my_modal_5" className="modal flex justify-center items-center modal-bottom sm:modal-middle">
          <div className="modal-box w-[350px] md:w-[450px] lg:w-[450px] bg-[#FFFFFF] h-[480px] p-5">
            <div className="">
              <h3 className="font-bold text-black text-2xl ">Add New Board</h3>
              <form onSubmit={handleBoard} className="mt-5">
                <label className="text-xl font-semibold text-gray-500">Name</label> <br />
                <input
                  className="w-[295px] md:w-[416px] lg:w-[416px] mt-2 mb-3 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-gray-400"
                  type="text"
                  name="name"
                  placeholder="e.g. Web Design"
                />{' '}
                <br />

                <label className="text-xl mt-5 font-semibold text-gray-500">Columns</label>
                <div className="flex items-center gap-3">
                  <input
                    className="w-[264px] md:w-[385px] lg:w-[385px] mt-2 border-2 border-[#E4EBFA] rounded-sm text-xl p-3 h-[40px] text-black"
                    type="text"
                    name="column1"
                  />
                  <img className="h-[20px]" src="/images/Group 18.png" alt="" />
                </div>

                {/* More column inputs */}

                <button className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#F4F7FD] rounded-full mb-5">
                  + Add New Column
                </button>
                <input
                  onClick={closeModal}
                  className="w-[295px] md:w-[416px] lg:w-[416px] h-[40px] bg-[#635FC7] text-white rounded-full"
                  type="submit"
                  value="Create New Board"
                />
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CreateBoard;
