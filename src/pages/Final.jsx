import { motion } from 'framer-motion'
import React from 'react'
import FormHeaderText from '../components/containers/FormHeaderText'
import FormScreen from '../components/screens/FormScreen'

const Final = () => {
    return (
        <FormScreen>
             <motion.form
        className="form"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: "-100vw", scale: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <FormHeaderText className="">
          <h1>
           Almost Done
          </h1>
        </FormHeaderText>
      </motion.form>
        </FormScreen>
    )
}

export default Final
