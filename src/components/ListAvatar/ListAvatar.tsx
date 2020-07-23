import  * as React from  'react'
import { Avatar } from '@bluebase/components';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
export const ListAvatar = (props)=>{
    return(
        <ListItemAvatar>
            <Avatar  {...props} />
        </ListItemAvatar>

    );
}
