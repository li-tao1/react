import { Modal, Button,Form,Input,Radio} from 'antd';
import {connect} from 'react-redux';
import {edit_modal_fn} from "actions/power_manage/power/edit_modal";
import MyTags from 'component/tags';
import 'style/edit_modal.less';

const { TextArea } = Input;

class Detail_modal1 extends React.Component {
  state = {  };
  handleCancel = e => {
     this.props.edit_modal_fn({visible_detail:false,params:{}})
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
      };
    let {visible_detail,params}=this.props.edit_modal; 
    let {userInfo_detail}=this.props.list;
    let roleName= userInfo_detail.roleName || '';
    let roleDescribe= userInfo_detail.roleDescribe || '';
    let roleStatus= userInfo_detail.roleStatus=='1'?'正常':'禁用';
    let jurisdictionId= userInfo_detail.jurisdictionId || [];
    return (
        <Modal
          title="权限详情"
          wrapClassName='l_edit_power_modal'
          visible={visible_detail}
          onCancel={this.handleCancel}
          footer={null}
          maskClosable={false}
          width={700}
        >
          <Form autoComplete='off' {...formItemLayout}>
                <Form.Item label='模块名称'>
                     <span>{roleName}</span>
                </Form.Item> 
                <Form.Item label='状态'>
                     <span>{roleDescribe}</span>
                </Form.Item>
                <Form.Item label='类型'>
                     <span>{roleStatus}</span>
                </Form.Item>
                <Form.Item label='选择父源资源'>
                     <span>{roleStatus}</span>
                </Form.Item>
                <Form.Item label='URI'>
                     <span>{roleStatus}</span>
                </Form.Item>
                <Form.Item label='资源描述'>
                     <MyTags list={jurisdictionId}/>
                </Form.Item>
                <div className='clear'></div>
          </Form>  
        </Modal>
    );
  }
}

const Detail_modal = Form.create({ name: 'detail_modal' })(Detail_modal1);
export default connect((state) => ({edit_modal: state.power_edit_modal,list:state.power_list}), {edit_modal_fn})(Detail_modal);