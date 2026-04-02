import { Observable } from 'rxjs';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }

  interface HTMLElement {
    scrollIntoViewIfNeeded(): void;
  }

  interface Navigator {
    msMaxTouchPoints: number;
  }
}

interface IModalConfig {
  id: string;
  title: string;
  body: string;
  okText: string;
  cancelText: string;
  buttons?: { text: string; handler: () => void }[];
  onOk?: () => void;
  onCancel?: () => void;
}

interface IAsyncTask {
  key: string;
  name: string;
  status: string;
  progress: number;
  errorMessage?: string;
}

interface IAction {
  type: string;
  payload: any;
}

interface IForm {
  id: string;
  label: string;
  name: string;
  type: string;
  value: string;
  options?: { label: string; value: string }[];
  required: boolean;
  errors: { [key: string]: string };
}

interface IAppState {
  app: {
    apiUrl: string;
    isFetching: boolean;
  };
  auth: {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
  };
  modal: {
    isOpen: boolean;
    config: IModalConfig;
  };
  form: {
    id: string;
    data: IForm;
  };
  tasks: {
    list: IAsyncTask[];
    isFetching: boolean;
  };
}

interface ITemplate {
  id: string;
  name: string;
  content: string;
  type: string;
}

interface IAPIResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: { [key: string]: string };
}

interface IToast {
  id: string;
  message: string;
  type: 'success' | 'error';
}

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface IGraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

interface ISetting {
  id: string;
  name: string;
  value: any;
}

interface ICategory {
  id: string;
  name: string;
  parentId: string;
}

interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categories: ICategory[];
}

interface IOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  status: string;
  products: IProduct[];
  total: number;
}