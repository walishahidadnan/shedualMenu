import React from "react";

import { Inject , ScheduleComponent , Day, Week, WorkWeek, Month, Agenda , EventSettingsModel} from '@syncfusion/ej2-react-schedule'

class Scheduler extends React.Component{
    localData: EventSettingsModel = {
      
        fields:{
            subject: { name: 'Summary',default: '' },
            startTime: { name: 'Start' },
            endTime: { name: 'End'}
        }
    };
    render(){
        return <ScheduleComponent currentView="Week"  selectedDate={new Date(2019, 0, 11)} eventSettings={ this.localData }>
            
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    }
}
export default Scheduler;