import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import HireADeveloper from "./pages/HireADeveloper";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ServicesPage from "./pages/Services";
import ReactServicesPage from "./pages/technologies/ReactJs";
import AngularServicesPage from "./pages/technologies/Angular";
import { NextJsServicePage } from "./pages/technologies/NextJs";
import { VueJsServicePage } from "./pages/technologies/VueJs";
import JavaServicesPage from "./pages/technologies/Java";
import NodeJsServicesPage from "./pages/technologies/NodeJs";
import DotNetServicesPage from "./pages/technologies/DotNet";
import PythonServicesPage from "./pages/technologies/Python";
import LaravelServicesPage from "./pages/technologies/Laravel";
import ReactNativeServicesPage from "./pages/technologies/ReactNative";
import FlutterServicesPage from "./pages/technologies/Flutter";
import IOSServicesPage from "./pages/technologies/iOS";
import AndroidServicesPage from "./pages/technologies/Android";
import DotNetMauiServicesPage from "./pages/technologies/Xamarin";
import AwsServicesPage from "./pages/technologies/AWS";
import JenkinsServicesPage from "./pages/technologies/Jenkins";
import KubernetesServicesPage from "./pages/technologies/Kubernetes";
import DockerServicesPage from "./pages/technologies/Docker";
import AzureServicesPage from "./pages/technologies/MicrosoftAzure";
import GcpServicesPage from "./pages/technologies/GCP";
import MysqlServicesPage from "./pages/technologies/MySQL";
import MongodbServicesPage from "./pages/technologies/MongoDB";
import PostgresqlServicesPage from "./pages/technologies/PostgreSQL";
import QaAutomationServicesPage from "./pages/technologies/QAAndAutomation";
import ManualTestingServicesPage from "./pages/technologies/ManualTesting";
import AutomationTestingServicesPage from "./pages/technologies/AutomationTesting";
import SeleniumServicesPage from "./pages/technologies/Selenium";
import ProductDesignServicesPage from "./pages/technologies/ProductDesign";
import MobileAppDesignServicesPage from "./pages/technologies/MobileAppDesign";
import WebDesignServicesPage from "./pages/technologies/WebDesign";
import GraphicDesignServicesPage from "./pages/technologies/GraphicDesign";
import UiUxDesignServicesPage from "./pages/technologies/UIUXDesign";
import SeoServicesPage from "./pages/technologies/SEO";
import SmoServicesPage from "./pages/technologies/SMO";
import PpcCampaignsPage from "./pages/technologies/PPCCampaigns";
import OrmServicesPage from "./pages/technologies/ORM";
import AiDevelopmentPage from "./pages/AiDevelopmentPage";
import AiConsultingAndDevelopmentPage from "./pages/AiConsultingPage";
import GenerativeAiPage from "./pages/GenerativeAI";
import ModelTrainingPage from "./pages/ModelTrainingPage";
import NaturalLanguageProcessingPage from "./pages/NLP";
import LlmDevelopmentPage from "./pages/LlmDevelopmentPage";
import AiConsultingPage from "./pages/AiConsultingPage";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
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
        <Route path="/hire-a-developer" element={<HireADeveloper />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<ServicesPage />} />
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
          <Route path="qa-automation" element={<QaAutomationServicesPage />} />
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
    </>
  );
};

export default App;
