"use client";
import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtns/PrimaryBtn";
import { Slider, Typography } from "@mui/material";

const HeroForm = () => {
  // const [budget, setBudget] = useState(5000);

  // const handleBudgetChange = (e) => {
  //   const newBudget = parseInt(e.target.value);
  //   setBudget(newBudget);
  //   console.log("Budget changed to:", newBudget);
  // };
  const [budgetRange, setBudgetRange] = useState([5000, 10000]);

  const handleBudgetChange = (event, newValue) => {
    console.log(event, newValue);

    if (Array.isArray(newValue)) {
      setBudgetRange(newValue);
    }
  };
  console.log(budgetRange);

  return (
    <>
      <div className="w-full">
        <h2 className="mb-3 text-2xl font-bold">Have any questions?</h2>

        <form className="space-y-0">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Your name*
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Your email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium">
              Your number*
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your number"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="budget" className="mb-1 block text-sm font-medium">
              What is your budget?
            </label>
            <div className="my-2 flex items-center">
              {/* <span className="mr-2 text-sm">USD 5K</span> */}
              <Typography variant="body2">USD 5K</Typography>

              <Slider
                value={budgetRange}
                onChange={handleBudgetChange}
                valueLabelDisplay="auto"
                min={5000}
                max={10000}
                step={500}
                marks={[{ value: 5000 }, { value: 10000 }]}
                sx={{
                  color: "primary.main",
                  height: 8,
                  mx: 2,

                  // width: "50px",
                  "& .MuiSlider-thumb": {
                    height: 24,
                    width: 24,
                    backgroundColor: "#fff",
                    border: "2px solid currentColor",
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.5,
                    backgroundColor: "#bfbfbf",
                  },
                }}
              />

              <Typography variant="body2">USD 100K</Typography>
              {/* <input
                type="range"
                id="budget"
                min="5000"
                max="100000"
                step="1000"
                value={budget}
                onChange={handleBudgetChange}
                className="h-1 flex-grow appearance-none rounded-full bg-gray-300 outline-none"
              /> */}
              {/* <span className="ml-2 text-sm">USD 100K+</span> */}
            </div>
            {/* <p className="text-sm mt-1">Selected budget: USD {budget.toLocaleString()}</p> */}
          </div>

          <div>
            <label htmlFor="project" className="mb-1 block text-sm font-medium">
              Tell us about the project
            </label>
            <textarea
              id="project"
              placeholder="Type Here"
              className="h-16 w-full resize-none rounded-xl border border-gray-300 bg-transparent px-3 py-1 outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <PrimaryBtn text={"Submit"} />
        </form>
      </div>
    </>
  );
};

export default HeroForm;
