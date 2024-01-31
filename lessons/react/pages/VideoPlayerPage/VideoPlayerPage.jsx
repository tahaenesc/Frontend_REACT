import { Counter } from "../../components/Counter/Counter";
import { HelloMessage } from "../../components/HelloMessage/HelloMessage";
import { Posts } from "../../components/Posts/Posts";
import { Todos } from "../../components/Todos/Todos";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";

export function VideoPlayerPage () {
  const data = {
    date: new Date(),
    lastLoginDate: new Date()
  }
  
  console.log('data', data)

  return <>
    {/*<HelloMessage name="Jack" lastName="Sparrow" {...{...data}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis
          nisi, gravida non vestibulum et, viverra sed mauris. Quisque metus ex,
          mattis sed faucibus tempor, consequat eget lorem. Sed id libero
          viverra, blandit mauris vitae, porta dolor. Pellentesque at tincidunt
          sem, vel rhoncus nisi. Vivamus tincidunt, ante eu blandit vestibulum,
          nunc eros finibus tortor, eu hendrerit metus metus in elit. Vestibulum
          ac felis at lacus iaculis dictum at id metus.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          reiciendis mollitia aliquam cupiditate exercitationem sit non ut
          possimus quaerat ex?
        </p>
      </HelloMessage>*/}
      {/*<Counter />*/}
      {/*<Todos />*/}
      {/*<Posts />*/}
      <VideoPlayer />
  </>
}