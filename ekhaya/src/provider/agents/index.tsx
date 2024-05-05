'use client'

import React , {useContext , useReducer } from 'react'; 
import { agentreducer } from './reducer';
import { message } from 'antd';
import {getallagentsaction} from './action'; 
import axios from 'axios'; 

interface AgentProviderProps{
    children: React.ReactNode
}



