import React, { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./lib/PageLoader";
import FullStackDeveloper from "./pages/hireDeveloper/FullStackDeveloper";
import AIMLDeveloper from "./pages/hireDeveloper/AIMLDeveloper";
import ReactDeveloper from "./pages/hireDeveloper/ReactDeveloper";
import NodejsDeveloper from "./pages/hireDeveloper/NodejsDeveloper";
import FrontendDeveloper from "./pages/hireDeveloper/FrontendDeveloper";
import DevOpsEngineer from "./pages/hireDeveloper/DevOpsEngineer";
import DotnetDeveloper from "./pages/hireDeveloper/DotnetDeveloper";
import MEANStackDeveloper from "./pages/hireDeveloper/MEANStackDeveloper";
import BackendDeveloper from "./pages/hireDeveloper/BackendDeveloper";
import MERNStackDeveloper from "./pages/hireDeveloper/MERNStackDeveloper";
import MobileAppDeveloper from "./pages/hireDeveloper/MobileAppDeveloper";
import PythonDeveloper from "./pages/hireDeveloper/PythonDeveloper";
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Home = lazy(() => import("./pages/Home"));
const HireADeveloper = lazy(() => import("./pages/HireADeveloper"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ReactServicesPage = lazy(() => import("./pages/technologies/ReactJs"));
const AngularServicesPage = lazy(() => import("./pages/technologies/Angular"));
const NextJsServicePage = lazy(() =>
  import("./pages/technologies/NextJs").then((module) => ({
    default: module.NextJsServicePage,
  })),
);
const VueJsServicePage = lazy(() =>
  import("./pages/technologies/VueJs").then((module) => ({
    default: module.VueJsServicePage,
  })),
);
const JavaServicesPage = lazy(() => import("./pages/technologies/Java"));
const NodeJsServicesPage = lazy(() => import("./pages/technologies/NodeJs"));
const DotNetServicesPage = lazy(() => import("./pages/technologies/DotNet"));
const PythonServicesPage = lazy(() => import("./pages/technologies/Python"));
const LaravelServicesPage = lazy(() => import("./pages/technologies/Laravel"));
const ReactNativeServicesPage = lazy(
  () => import("./pages/technologies/ReactNative"),
);
const FlutterServicesPage = lazy(() => import("./pages/technologies/Flutter"));
const IOSServicesPage = lazy(() => import("./pages/technologies/iOS"));
const AndroidServicesPage = lazy(() => import("./pages/technologies/Android"));
const DotNetMauiServicesPage = lazy(
  () => import("./pages/technologies/Xamarin"),
);
const AwsServicesPage = lazy(() => import("./pages/technologies/AWS"));
const JenkinsServicesPage = lazy(() => import("./pages/technologies/Jenkins"));
const KubernetesServicesPage = lazy(
  () => import("./pages/technologies/Kubernetes"),
);
const DockerServicesPage = lazy(() => import("./pages/technologies/Docker"));
const AzureServicesPage = lazy(
  () => import("./pages/technologies/MicrosoftAzure"),
);
const GcpServicesPage = lazy(() => import("./pages/technologies/GCP"));
const MysqlServicesPage = lazy(() => import("./pages/technologies/MySQL"));
const MongodbServicesPage = lazy(() => import("./pages/technologies/MongoDB"));
const PostgresqlServicesPage = lazy(
  () => import("./pages/technologies/PostgreSQL"),
);
const QaAutomationServicesPage = lazy(
  () => import("./pages/technologies/QAAndAutomation"),
);
const ManualTestingServicesPage = lazy(
  () => import("./pages/technologies/ManualTesting"),
);
const AutomationTestingServicesPage = lazy(
  () => import("./pages/technologies/AutomationTesting"),
);
const SeleniumServicesPage = lazy(
  () => import("./pages/technologies/Selenium"),
);
const ProductDesignServicesPage = lazy(
  () => import("./pages/technologies/ProductDesign"),
);
const MobileAppDesignServicesPage = lazy(
  () => import("./pages/technologies/MobileAppDesign"),
);
const WebDesignServicesPage = lazy(
  () => import("./pages/technologies/WebDesign"),
);
const GraphicDesignServicesPage = lazy(
  () => import("./pages/technologies/GraphicDesign"),
);
const UiUxDesignServicesPage = lazy(
  () => import("./pages/technologies/UIUXDesign"),
);
const SeoServicesPage = lazy(() => import("./pages/technologies/SEO"));
const SmoServicesPage = lazy(() => import("./pages/technologies/SMO"));
const PpcCampaignsPage = lazy(
  () => import("./pages/technologies/PPCCampaigns"),
);
const OrmServicesPage = lazy(() => import("./pages/technologies/ORM"));
const AiDevelopmentPage = lazy(() => import("./pages/AiDevelopmentPage"));
const AiConsultingAndDevelopmentPage = lazy(
  () => import("./pages/AiConsultingPage"),
);
const GenerativeAiPage = lazy(() => import("./pages/GenerativeAI"));
const ModelTrainingPage = lazy(() => import("./pages/ModelTrainingPage"));
const NaturalLanguageProcessingPage = lazy(() => import("./pages/NLP"));
const LlmDevelopmentPage = lazy(() => import("./pages/LlmDevelopmentPage"));
const AiConsultingPage = lazy(() => import("./pages/AiConsultingPage"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-development" element={<AiDevelopmentPage />} />
          <Route path="/ai-consulting-company" element={<AiConsultingPage />} />
          <Route path="/ai-modal-training" element={<ModelTrainingPage />} />
          <Route path="/generative-ai" element={<GenerativeAiPage />} />
          <Route
            path="/natural-language-processing"
            element={<NaturalLanguageProcessingPage />}
          />
          <Route path="/llm-development" element={<LlmDevelopmentPage />} />
          <Route path="/hire-developers" element={<HireADeveloper />} />

          <Route
            path="/hire-developers/full-stack-developer"
            element={<FullStackDeveloper />}
          />
          <Route
            path="/hire-developers/ai-ml-developer"
            element={<AIMLDeveloper />}
          />
          <Route
            path="/hire-developers/react-developer"
            element={<ReactDeveloper />}
          />
          <Route
            path="/hire-developers/nodejs-developer"
            element={<NodejsDeveloper />}
          />
          <Route
            path="/hire-developers/mern-stack-developer"
            element={<MERNStackDeveloper />}
          />
          <Route
            path="/hire-developers/mean-stack-developer"
            element={<MEANStackDeveloper />}
          />
          <Route
            path="/hire-developers/frontend-developer"
            element={<FrontendDeveloper />}
          />
          <Route
            path="/hire-developers/devops-engineer"
            element={<DevOpsEngineer />}
          />

          <Route
            path="/hire-developers/dotnet-developer"
            element={<DotnetDeveloper />}
          />

          <Route
            path="/hire-developers/mobile-app-developer"
            element={<MobileAppDeveloper />}
          />

          <Route
            path="/hire-developers/backend-developer"
            element={<BackendDeveloper />}
          />

          <Route
            path="/hire-developers/python-developer"
            element={<PythonDeveloper />}
          />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="technologies" element={<Outlet />}>
            <Route path="react-js" element={<ReactServicesPage />} />
            <Route path="angular" element={<AngularServicesPage />} />
            <Route path="vue-js" element={<VueJsServicePage />} />
            <Route path="next-js" element={<NextJsServicePage />} />
            <Route
              path="java-development-services"
              element={<JavaServicesPage />}
            />
            <Route
              path="nodejs-development-services"
              element={<NodeJsServicesPage />}
            />
            <Route
              path="dot-net-development-company"
              element={<DotNetServicesPage />}
            />
            <Route
              path="python-development-company"
              element={<PythonServicesPage />}
            />
            <Route
              path="laravel-development-company"
              element={<LaravelServicesPage />}
            />
            <Route
              path="react-native-app-development"
              element={<ReactNativeServicesPage />}
            />
            <Route
              path="react-native-app-development"
              element={<ReactNativeServicesPage />}
            />
            <Route
              path="flutter-development-company"
              element={<FlutterServicesPage />}
            />
            <Route
              path="ios-app-development-company"
              element={<IOSServicesPage />}
            />
            <Route
              path="android-app-development-company"
              element={<AndroidServicesPage />}
            />
            <Route
              path="xamarin-app-development-company"
              element={<DotNetMauiServicesPage />}
            />
            <Route path="aws-services" element={<AwsServicesPage />} />
            <Route path="gcp-services" element={<GcpServicesPage />} />
            <Route path="azure-services" element={<AzureServicesPage />} />
            <Route path="docker" element={<DockerServicesPage />} />
            <Route path="kubernetes" element={<KubernetesServicesPage />} />
            <Route path="jenkins" element={<JenkinsServicesPage />} />
            <Route
              path="mysql-database-development-services-company"
              element={<MysqlServicesPage />}
            />
            <Route
              path="mongodb-development-services-company"
              element={<MongodbServicesPage />}
            />
            <Route
              path="postgresql-development-services"
              element={<PostgresqlServicesPage />}
            />
            <Route
              path="qa-automation"
              element={<QaAutomationServicesPage />}
            />
            <Route
              path="manual-testing"
              element={<ManualTestingServicesPage />}
            />
            <Route
              path="automation-testing"
              element={<AutomationTestingServicesPage />}
            />
            <Route path="selenium" element={<SeleniumServicesPage />} />
            <Route path="ui-ux-design" element={<UiUxDesignServicesPage />} />
            <Route
              path="graphic-design"
              element={<GraphicDesignServicesPage />}
            />
            <Route path="web-design" element={<WebDesignServicesPage />} />
            <Route
              path="mobile-app-design"
              element={<MobileAppDesignServicesPage />}
            />
            <Route
              path="product-design"
              element={<ProductDesignServicesPage />}
            />
            <Route path="best-seo-services" element={<SeoServicesPage />} />
            <Route path="smo-services-company" element={<SmoServicesPage />} />
            <Route path="ppc-services" element={<PpcCampaignsPage />} />
            <Route path="best-orm-services" element={<OrmServicesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
