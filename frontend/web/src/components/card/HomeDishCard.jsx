
export function HomeDishCard({ imgClassName = "", card_img, dish_name, dish_type, dish_calories }) {
    return (
        <div
            className="flex flex-col sm:flex-row w-full sm:w-[360px] h-auto sm:h-[190px] rounded-[7px] justify-between items-center shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] bg-[#eeeeee] p-4"
        >
            <div className="text-center sm:text-left">
                <div className="text-lg font-semibold">{dish_name}</div>
                <div className="text-sm text-gray-600">{dish_type}</div>
                <div className="text-sm text-gray-600">{dish_calories}</div>
            </div>

            <img
                src={card_img}
                className={`${imgClassName} mt-4 sm:mt-0 sm:ml-4 max-h-32`}
                alt=""
            />
        </div>
    );
}
