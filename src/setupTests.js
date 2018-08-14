import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzymeSerializer from 'enzyme-to-json/serializer'

expect.addSnapshotSerializer(enzymeSerializer)
configure({ adapter: new Adapter() })