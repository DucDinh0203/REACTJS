import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import './Details.style.css';
import HeaderComponments from '../../Componments/Header/Header.componments';
import PokemonAvatar from '../../Componments/Pokemon/PokemonAvatar';
import PokemonAbout from '../../Componments/Pokemon/PokemonAbout';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PokemonStats from '../../Componments/Pokemon/PokemonStats';
import PokemonEvolution from '../../Componments/Pokemon/PokemonEvolution';
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";

// Pokemon details outline page
const Details = () => {
    const { name } = useParams();
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {setValue(newValue)};

    return (
        <div className='details'>
            <header>
                <HeaderComponments/>
            </header>
            <div className='details-container'>
                <PokemonAvatar name={name}/>
                <div className='details-content'>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box className="tab-heading" sx={{ borderBottom: 2, borderColor: 'divider' }}>
                                <TabList className='tab-list' onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab className='tab-title' label="About" value="1"  />
                                    <Tab className='tab-title' label="Stats" value="2" />
                                    <Tab className='tab-title' label="Evolution" value="3" />
                                </TabList>
                            </Box>

                            <TabPanel className='panel' value="1">
                                <PokemonAbout name={name}/>
                            </TabPanel>

                            <TabPanel className='panel' value="2">
                                <PokemonStats name={name}/>
                            </TabPanel>

                            <TabPanel className='panel' value="3">
                                <PokemonEvolution name={name}/>
                            </TabPanel>

                        </TabContext>
                    </Box>    
                </div>
                
            </div>
            

        </div>
    )
}

export default Details