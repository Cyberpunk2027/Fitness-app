import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Calculator = ({setSelectedPage}: Props) => {

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
  
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
                                className={inputStyles} 
                                type="number"
                                placeholder="Your height" />
                                
                                <input 
                                className={inputStyles} 
                                type="number"
                                placeholder="Your weight" />

                                
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Male</legend>
                                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Female</legend>
                                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                
                            </form>
                            
                    </motion.div>


                    <div className="mt-[-20]">
                        <HText>
                            <span>CHOOSE YOUR PHYSICAL ACTIVITY LEVEL</span> 
                         </HText>
                     </div>
                 </div>
             </motion.div>
    </section>
)
}

export default Calculator