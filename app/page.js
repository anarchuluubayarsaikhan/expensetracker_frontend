"use client";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useQueryState } from "nuqs";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import dayjs from "dayjs";
import { IconConverterSecond } from "@/components/iconname";
import { DatePickerWithRange } from "@/components/daterange";
import { Addrecord } from "@/components/dialog";
import { Addcategory } from "@/components/addcategory";
import { Sidebar } from "@/components/sidebar";
import { Addcategorybutton } from "@/components/categorybutton";
import { useRouter } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";
import { Geticons } from "@/lib/icons";
import {
    CircleHelp,
    Pencil,
    PlayIcon,
    Trash2,
  } from "lucide-react";
import { Getcolors } from "@/lib/colors";
const types = [
    {
      name: "Expense",
      value: "expense",
      color: "#0166FF",
      basecolor: "#F3F4F6",
    },
    {
      name: "Income",
      value: "income",
      color: "#16A34A",
      basecolor: "#F3F4F6",
    },
  ];
  const typessidebar = [
    {
      value: null,
      id: "r1",
      typename: "All",
    },
    {
      value: "income",
      id: "r2",
      typename: "Income",
    },
    {
      value: "expense",
      id: "r3",
      typename: "Expense",
    },
  ];





export default function Records() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorValue, setSelectedColorValue] = useState("");
  const [selectedIconi, setSelectedIconi] = useState("");
  const [selectedName, setselectedName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedIcon, setSelectedicon] = useState(
    <CircleHelp strokeWidth={3} />
  );

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [payee, setPayee] = useState("");
  const [note, setNote] = useState("");
  const [activestate, setActive] = useState("");
  const [time, setTime] = useState("");
  const [iconId, setIconId] = useState("");
  const formatedDate = dayjs(date).format("YYYY-MM-DD");
  const today = dayjs().format("YYYY-MM-DD");
  const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
  const [recordings, setRecordings] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [editingRecords, setEditingRecords] = useState();

  const [typename, setTypeName] = useQueryState("typename");
  const [categoryname, setCategoryName] = useQueryState("categoryname");
  const [newest, setNewest] = useQueryState("date");
  const router = useRouter();

  const totalPrice = recordings.reduce((accumulator, recording) => {
    return (accumulator += Number(recording.amount));
  }, 0);

  const searchParams = useSearchParams();
  const idedited = searchParams.get("id");
  const daterange = searchParams.get("daterange");

  function toggleCheckbox(id) {
    if (selectedCheckbox.includes(id)) {
      const removed = selectedCheckbox.filter((itemId) => id !== itemId);
      setSelectedCheckbox(removed);
    } else {
      setSelectedCheckbox((s) => [...s, id]);
    }
  }

  function Allchecked() {
    if (recordings.length === selectedCheckbox.length) {
      setSelectedCheckbox([]);
    } else {
      recordings.map((rec) => setSelectedCheckbox((s) => [...s, rec.id]));
    }
  }
  function changeDate(date) {
    if (date === today) return "Today";
    else if (date === yesterday) {
      return "Yesterday";
    } else {
      return date;
    }
  }

  function loadCategories() {
    fetch("http://localhost:4000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => setCategories(data));
  }

  useEffect(() => {
    loadCategories();
  }, []);

  function loadList() {
    if (typename === null) {
      fetch("http://localhost:4000/recordings")
        .then((res) => {
          return res.json();
        })
        .then((data) => setRecordings(data));
    } else {
      fetch(
        `http://localhost:4000/types?typename=${typename ?? ""}&categoryname=${
          categoryname || ""
        }&daterange=${daterange || ""}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => setRecordings(data));
      console.log(daterange);
    }
  }
  useEffect(() => {
    loadList();
  }, [typename, categoryname]);

  function resetCategories() {
    setSelectedColor("");
    setselectedName("");
  }
  function resetRecords() {
    setActive("");
    setDate("");
    setAmount("");
    setPayee("");
    setNote("");
    setTime("");
    setIconId("");
  }

  function addcategories() {
    fetch("http://localhost:4000/categories", {
      method: "POST",
      body: JSON.stringify({
        name: selectedName,
        icon: selectedIconi,
        color: selectedColor,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      loadCategories();
      loadList();
      resetCategories();
    });
  }

  function addRecords() {
    fetch("http://localhost:4000/recordings", {
      method: "POST",
      body: JSON.stringify({
        alltype: activestate,
        amount: amount,
        category: iconId,
        date: formatedDate,
        time: time,
        payee: payee,
        note: note,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      loadCategories();
      loadList();
      resetRecords();
    });
  }
  useEffect(() => {
    if (editingRecords) {
      const add = router.push(`?show=dialog&id=${editingRecords.id}`);
      setActive(editingRecords.alltransactiontypes);
      setDate(editingRecords.date);
      setAmount(editingRecords.amount);
      setPayee(editingRecords.payee);
      setNote(editingRecords.note);
      setTime(editingRecords.time);
    } else {
      router.push(`?`);
    }
  }, [editingRecords]);

  function editExpense() {
    fetch(`http://localhost:4000/recordings/${idedited}`, {
      method: "PUT",
      body: JSON.stringify({
        alltype: activestate,
        amount: amount,
        category: iconId,
        date: formatedDate,
        time: time,
        payee: payee,
        note: note,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      loadCategories();
      loadList();
      resetRecords();
    });
  }
  function deleteExpense(id) {
    fetch(`http://localhost:4000/recordings/${id}`, {
      method: "DELETE",
    }).then(() => {
      loadCategories();
      loadList();
      resetRecords();
    });
  }

  return (
    <div className=" max-w-screen-lg m-auto flex flex-col gap-6">
      <Header />
      <div className="flex gap-6 bg-gray-50 py-6">
        <div className="flex flex-col gap-6 py-4 px-8 bg-white rounded-xl border">
          <div className="font-semibold text-2xl text-black">Records</div>
          <div>
            <Sidebar />
            <Addrecord
              types={types}
              amount={amount}
              setIconId={setIconId}
              categories={categories}
              addRecords={addRecords}
              activestate={activestate}
              setActive={setActive}
              date={date}
              setDate={setDate}
              time={time}
              payee={payee}
              note={note}
              setPayee={setPayee}
              setNote={setNote}
              setAmount={setAmount}
              setTime={setTime}
              editExpense={editExpense}
              editingRecords={editingRecords}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-base font-semibold placeholder-primary-text-base">
              Types
            </div>

            <RadioGroup defaultValue={typename}>
              {typessidebar.map((typesside) => (
                <div
                  key={typesside.id}
                  className="flex items-center space-x-2"
                  onClick={() => setTypeName(typesside.value)}
                >
                  <RadioGroupItem value={typesside.value} id={typesside.id} />
                  <Label htmlFor={typesside.id}>{typesside.typename} </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="text-base font-semibold placeholder-primary-text-base">
                Category
              </div>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex justify-between items-center"
              >
                <div className="flex gap-2 items-center">
                  <div style={{ color: category.color }}>
                    <IconConverterSecond iconName={category.icon} />
                  </div>

                  <div
                    className="text-base font-normal text-primary-text-base"
                    onClick={() => setCategoryName(category.id)}
                  >
                    {category.name}
                  </div>
                </div>
                <PlayIcon size={16} />
              </button>
            ))}
            <div>
              <Addcategorybutton />
              <Addcategory
                icons={Geticons()}
                colors={Getcolors ()}
                addcategories={addcategories}
                selectedColorValue={selectedColorValue}
                selectedIcon={selectedIcon}
                selectedColor={selectedColor}
                selectedName={selectedName}
                setSelectedicon={setSelectedicon}
                setSelectedIconi={setSelectedIconi}
                setSelectedColor={setSelectedColor}
                setSelectedColorValue={setSelectedColorValue}
                setselectedName={setselectedName}
              />
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex-1 p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center bg-white py-3 px-6 rounded-xl">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" onClick={() => Allchecked()} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Select all
              </label>
            </div>
            <div>{totalPrice}</div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              {recordings.map((record, index, array) => (
                <div key={record.id}>
                  <div
                    className={`text-base font-semibold text-black ${
                      array[index].date !==
                      (index > 0 ? array[index - 1].date : "")
                        ? ""
                        : "hidden"
                    }`}
                  >
                    {changeDate(record.date)}
                  </div>
                  <div
                    className={`flex justify-between items-center bg-white py-3 px-6 rounded-xl `}
                  >
                    <div className="flex items-center gap-4">
                      <Checkbox
                        id={record.id}
                        checked={selectedCheckbox.includes(record.id)}
                        onClick={() => toggleCheckbox(record.id)}
                      />

                      <label
                        htmlFor={record.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <div className="flex gap-4 items-center">
                          <div
                            className={`bg-primary-main-blue flex justify-center items-center p-3 rounded-full`}
                            style={{ color: record.color }}
                          >
                            <IconConverterSecond iconName={record.icon} />
                          </div>

                          <div className=" flex flex-col gap-1">
                            <div className="text-base font-normal text-black">
                              {record.name}
                            </div>
                            <div className="font-normal text-xs text-gray-500 ">
                              {record.time}
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div
                      className={`${
                        record.alltransactiontypes == "expense"
                          ? "text-red-700"
                          : "text-green-600"
                      }`}
                    >
                      {record.amount}₮
                    </div>
                    <div
                      className={`flex gap-4 ${
                        selectedCheckbox.includes(record.id)
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <button onClick={() => setEditingRecords(record)}>
                        <Pencil size={28} />
                      </button>
                      <button onClick={() => deleteExpense(record.id)}>
                        <Trash2 size={28} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
