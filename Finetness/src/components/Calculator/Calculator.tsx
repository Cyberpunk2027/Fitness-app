import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CheckboxGroup from "./CheckboxGroup";
import ActivityLevelCheckbox from "./ActivityLevelChekbox";
// import { useForm } from "react-hook-form"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Calculator = ({setSelectedPage}: Props) => {

    const [sex, setSex] = useState(localStorage.getItem('sex') || 'female');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [ratio, setRatio] = useState(localStorage.getItem('ratio') || 1.375);
    const [result, setResult] = useState('Нет данных')
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    
    const checkboxesSex = ['Male', 'Female']
    const checkboxesActivity = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active']
    

    useEffect(() => {
        localStorage.setItem('sex', sex);
    }, [sex]);

    //   useEffect(() => {
    //     localStorage.setItem('ratio', ratio);
    //   }, [ratio]);

    //   useEffect(() => {
    //     calcTotal();
    //   }, [sex, height, weight, age, ratio]);

    return (
        <section id="calculator" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div 
                onViewportEnter={() => setSelectedPage(SelectedPage.Calculator)}>
                    
                    <motion.div 
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}>
                        <HText>
                            <span className="text-primary-500">CALCULATE</span> YOUR CAL
                        </HText>
                        <p className="my-5">
                            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                        </p>
                    </motion.div>

                    <div className="mb-10 justify-between  md:flex">
                        <motion.div
                            className="basis-1/5 md:mt-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                            }}>
                                <form target="_blank">
                                    <input 
                                    id="height"
                                    className={inputStyles} 
                                    type="number"
                                    placeholder="Your height" />
                                    
                                    <input 
                                    id="weight"
                                    className={inputStyles} 
                                    type="number"
                                    placeholder="Your weight" />

                                    <input 
                                    id="age"
                                    className={inputStyles} 
                                    type="number"
                                    placeholder="Your age" />

                                    
                                    <CheckboxGroup checkboxes={checkboxesSex} /> 
                                    <ActivityLevelCheckbox checkboxes={checkboxesActivity}/>   
                                    {/* <CheckboxGroup checkboxes={checkboxes}>
                                    
                                    {checkboxes.map((checkbox) => (
                                        <label key={checkbox}>
                                        <legend className="text-sm font-semibold leading-6 text-gray-900">Male</legend>
                                        <input 
                                        id="male" 
                                        value={checkbox} 
                                        type="checkbox" 
                                        checked={selectedCheckbox === checkbox}
                                        onChange={handleCheckboxChange}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>

                                        <legend className="text-sm font-semibold leading-6 text-gray-900">Female</legend>
                                        <input id="female" value={checkboxes} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                    </label>
                                    ))}    
                                    
                                    </CheckboxGroup> */}
                                </form>
                                
                        </motion.div>


                        {/* <div id="ratio" className="mt-[20]">
                            <span>CHOOSE YOUR PHYSICAL ACTIVITY LEVEL</span> 
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Sedentary</legend>
                            <input id="male" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Lightly Active</legend>
                            <input id="female" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Moderately Active</legend>
                            <input id="female" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <legend className="text-sm font-semibold leading-6 text-gray-900">Very Active</legend>
                            <input id="female" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                        </div> */}
                        <div id="result">
                            <span>YOUR DAYLY CALORIE RESULT:</span>
                            <div>
                                <HText>
                                    2700 cal
                                </HText>
                            </div> 
                        </div>
                    </div>
                </motion.div>
        </section>
    )
    }

export default Calculator