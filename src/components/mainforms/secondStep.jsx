import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PlanCards from "../formComponents/planCards";

import arcard from "../../assets/icons/icon-arcade.svg";
import adva from "../../assets/icons/icon-advanced.svg";
import pro from "../../assets/icons/icon-pro.svg";

export default function SecondStep() {
  const navigate = useNavigate();

  const [buttonValue, setButtonValue] = useState("");
  const [subType, setSubType] = useState("Monthly");

  const cards = [
    { icon: arcard, title: "Arcade", amount: "$9/mo" },
    { icon: adva, title: "Advanced", amount: "$12/mo" },
    { icon: pro, title: "Pro", amount: "$15/mo" },
  ];

  const saveStep = (e) => {
    e.preventDefault();
    if (buttonValue !== "") {
      navigate('/third')
    }
  };

  return (
    <article>
      <div className="mb-10">
        <h1 className="font-bold text-4xl mb-2">Select your plan</h1>
        <p className="text-Coolgray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <form onSubmit={(e) => saveStep(e)}>
        <div className="flex justify-between gap-6">
          {cards.map((card) => (
            <PlanCards
              key={card.title}
              title={card.title}
              icon={card.icon}
              amount={card.amount}
              clickEvent={() => {
                setButtonValue(card.title);
              }}
              isActive={buttonValue === card.title}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 bg-Magnolia p-2 rounded-lg gap-6">
          <p className="text-Coolgray font-medium text-Marine" id="monthly">
            Monthly
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={(e) => {
                document.querySelectorAll(".monthfree").forEach((card) => {
                  card.classList.toggle("invisible");
                });
                if (e.target.checked) {
                  document
                    .getElementById("yearly")
                    .classList.add("font-medium", "text-Marine");
                  document
                    .getElementById("monthly")
                    .classList.remove("font-medium", "text-Marine");
                  setSubType("Yearly");
                } else {
                  document
                    .getElementById("monthly")
                    .classList.add("font-medium", "text-Marine");
                  document
                    .getElementById("yearly")
                    .classList.remove("font-medium", "text-Marine");
                  setSubType("Monthly");
                }
              }}
            />
            <div className="w-9 h-5 bg-Marine peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-Marine"></div>
          </label>
          <p className="text-Coolgray" id="yearly">
            Yearly
          </p>
        </div>

        <div className="flex justify-between pt-20">
          <Link
            to={"/"}
            className="text-Coolgray hover:text-Marine transition duration-300 ease-in-out font-medium"
          >
            Go Back
          </Link>
          <button
            type="submit"
            className="outline-none border-none bg-Marine text-white py-3 px-5 rounded-lg text-sm hover:bg-Marine/80 transition duration-300 ease-in-out"
          >
            Next Step
          </button>
        </div>
      </form>
    </article>
  );
}