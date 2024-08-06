"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const CreateProjectSteps = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [agreementDate, setAgreementDate] = useState("")
    const [eventDate, setEventDate] = useState("")
    const router = useRouter()


    const createProject = async () => {
        if (!title || !description || !startDate || !agreementDate || !eventDate) {
            alert("Please fill in all fields");
            return;
        }


        const startDateDate = new Date(startDate);
        const agreementDateDate = new Date(agreementDate);
        const twoWeeks = 1000 * 60 * 60 * 24 * 14;

        const startDateTime = startDateDate.getTime();
        const agreementDateTime = agreementDateDate.getTime();

        if (agreementDateTime < startDateTime) {
            alert("Agreement date must be after the start date");
            return;
        }

        if (agreementDateTime - startDateTime < twoWeeks) {
            alert("Agreement date must be at least 2 weeks after the start date");
            return;
        }


        if (eventDate < agreementDate) {
            alert("Event date must be after the agreement date");
            return;
        }

        const project = await fetch("/api/projects", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                start_date: startDate,
                content_agreement_date: agreementDate,
                event_date: eventDate,
            })
        })

        if (project.ok) {
            alert("Project created successfully");
            router.push(`/dashboard`);
        } else {
            alert(`Error creating project: ${project.statusText}`);
        }
    }

  return (
    <div className="flex gap-y-6 flex-col">
        <div>
            <h2>Create New Webinar Campaign</h2>
        </div>
        <hr />
        <div className="rounded-lg p-4 bg-[#F5F5F5] max-w-xl text-sm">
            <div className="mb-4">
                <input type="text" name="title" id="title" placeholder="Webinar campaign title" className="w-full rounded-lg p-2 border border-gray-300" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="flex gap-x-2 items-stretch">
                <div className="basis-2/3">
                    <textarea name="description" id="description" placeholder="Webinar campaign description" className="w-full h-full resize-none rounded-lg p-2 border border-gray-300" rows={1} value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="flex flex-col gap-y-3">
                    <DateSelect title="Proposed Start Date" onChange={setStartDate} />
                    <DateSelect title="Content Agreement Due Date" onChange={setAgreementDate} />
                    <DateSelect title="Proposed Event Date" onChange={setEventDate} />
                    <button className="rounded-full bg-[#707070] text-white px-4 py-2" onClick={createProject}>Create Webinar Campaign</button>
                </div>
            </div>
        </div>
    </div>
  )
}

const DateSelect = ({ title, onChange }: { title: string, onChange: (e: any) => void }) => {
    const [value, setValue] = useState((new Date()).toISOString().split("T")[0])
    return (
        <div className="relative w-full rounded-lg bg-white border border-gray-300 p-2 pl-10 pr-10">
            <h4>{title}</h4>
            <hr />
            <div className="relative w-full ">
                <input
                    type="date"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    className="w-full rounded-lg p-2 border border-gray-300" />
            </div>
        </div>
    )
}

export default CreateProjectSteps