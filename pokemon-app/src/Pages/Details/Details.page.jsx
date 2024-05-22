import React from 'react';
import { useParams } from "react-router-dom";
import './Details.style.css';
import HeaderComponments from '../../Componments/Header/Header.componments';
import PokemonAvatar from '../../Componments/Pokemon/PokemonAvatar';
import PokemonAbout from '../../Componments/Pokemon/PokemonAbout';
import PokemonAbilities from '../../Componments/Pokemon/PokemonAbilities';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


// Pokemon details outline page
const Details = () => {
    const { name } = useParams();

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                            <Box className="tab-heading" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="About" value="1" />
                                    <Tab label="Stats" value="2" />
                                    <Tab label="Evolution" value="3" />
                                </TabList>
                            </Box>

                            <TabPanel className='panel' value="1">
                                <PokemonAbout name={name}/>
                            </TabPanel>

                            <TabPanel className='panel' value="2">
                                <div className='stats-container'>
                                    <h1 className='detail-sub-heading'>Stats</h1>
                                </div>
                            </TabPanel>

                            <TabPanel className='panel' value="3">
                                <div className='evolution-container'>
                                    <h1 className='detail-sub-heading'>Evolution</h1>
                                </div>
                            </TabPanel>

                        </TabContext>
                    </Box>    
                </div>
                
            </div>
            

        </div>
    )
}

export default Details