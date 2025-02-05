
import React from 'react';
import './custom.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './widgets/layout/navbar';
import { Home, Profile, SignIn, SignUp } from "@/pages";
import PCDSS from './pages/ComplianceCompassPages/PCDSS';
import PCPIN from './pages/ComplianceCompassPages/PCPIN';
import PC3DS from './pages/ComplianceCompassPages/PC3DS';
import PCP2PE from './pages/ComplianceCompassPages/PCP2PE';
import PCICard from './pages/ComplianceCompassPages/PCICard';
import PCSSF from './pages/ComplianceCompassPages/PCSSF';
import PCSAQ from './pages/ComplianceCompassPages/PCSAQ';
import ISMS from './pages/ComplianceCompassPages/ISMS';
import PIMS from './pages/ComplianceCompassPages/PIMS';
import BCMS from './pages/ComplianceCompassPages/BCMS';
import SOC from './pages/ComplianceCompassPages/SOC';
import HITRUST from './pages/ComplianceCompassPages/HITRUST';
import CISA from './pages/ComplianceCompassPages/CISA';
import NIST from './pages/ComplianceCompassPages/NIST';
import SynergizedModel from './pages/ComplianceCompassPages/SynergizedModel';
import ISA from './pages/ComplianceCompassPages/ISA';
import SWIFTCSF from './pages/ComplianceCompassPages/SWIFTCSF';
import ComplianceCompass from './pages/ComplianceCompass';
import CloudSecurity from './pages/GovernanceEnginePages/CloudSecurity';
import CyberCrisis from './pages/GovernanceEnginePages/CyberCrisis';
import CyberSecuirtyForensic from './pages/GovernanceEnginePages/CyberSecuirtyForensic';
import CyberSecurity from './pages/GovernanceEnginePages/CyberSecurity';
import DataGoverance from './pages/GovernanceEnginePages/DataGoverance';
import DataPrivacy from './pages/GovernanceEnginePages/DataPrivacy';
import DPO from './pages/GovernanceEnginePages/DPO';
import GovernanceFramework from './pages/GovernanceEnginePages/GovernanceFramework';
import ICSSecurity from './pages/GovernanceEnginePages/ICSSecurity';
import IncidentResponse from './pages/GovernanceEnginePages/IncidentResponse';
import MetricandReporting from './pages/GovernanceEnginePages/MetricandReporting';
import RiskAssessment from './pages/GovernanceEnginePages/RiskAssessment';
import SecurityArchitecture from './pages/GovernanceEnginePages/SecurityArchitecture';
import SecurityPolicy from './pages/GovernanceEnginePages/SecurityPolicy';
import SecurityProgram from './pages/GovernanceEnginePages/SecurityProgram';
import ThirdPartyRisk from './pages/GovernanceEnginePages/ThirdPartyRisk';
import VirtualCISO from './pages/GovernanceEnginePages/VirtualCISO';
import NetworkArchitecture from './pages/ThreatandVulnerabilityPages/NetworkArchitecture';
import NetworkVulnerability from './pages/ThreatandVulnerabilityPages/NetworkVulnerability';
import WebApplication from './pages/ThreatandVulnerabilityPages/WebApplication';
import MobileApplication from './pages/ThreatandVulnerabilityPages/MobileApplication';
import AdvancePenetration from './pages/ThreatandVulnerabilityPages/AdvancePenetration';
import ConfigurationManagement from './pages/ThreatandVulnerabilityPages/ConfigurationManagement';
import ComplianceFocused from './pages/ThreatandVulnerabilityPages/ComplianceFocused';
import VulnerabilityRemediation from './pages/ThreatandVulnerabilityPages/VulnerabilityRemediation';
import RedTeamAssessment from './pages/ThreatandVulnerabilityPages/RedTeamAssessment';
import PurpleTeamAssessment from './pages/ThreatandVulnerabilityPages/PurpleTeamAssessment';
import WirelessSecurity from './pages/ThreatandVulnerabilityPages/WirelessSecurity';
import SocialEngineering from './pages/ThreatandVulnerabilityPages/SocialEngineering';
import IoTSecurity from './pages/ThreatandVulnerabilityPages/IoTSecurity';
import SourceCodeReview from './pages/ThreatandVulnerabilityPages/SourceCodeReview';
import ThreatModelling from './pages/ThreatandVulnerabilityPages/ThreatModelling';
import AttackSurfaceAnalysis from './pages/ThreatandVulnerabilityPages/AttackSurfaceAnalysis';
import DevSecOps from './pages/ThreatandVulnerabilityPages/DevSecOps';
import Ransomeware from './pages/ThreatandVulnerabilityPages/Ransomeware';
import CloudSecurityAssessment from './pages/ThreatandVulnerabilityPages/CloudSecurityAssessment';
import DataLeakage from './pages/TechnologyArsenalPages/DataLeakage';
import IdentityAccess from './pages/TechnologyArsenalPages/IdentityAccess';
import SIEM from './pages/TechnologyArsenalPages/SIEM';
import XDR from './pages/TechnologyArsenalPages/XDR';
import DataDiscovery from './pages/TechnologyArsenalPages/DataDiscovery';
import WebApplicationFirewell from './pages/TechnologyArsenalPages/WebApplicationFirewell';
import GovernanceRisk from './pages/TechnologyArsenalPages/GovernanceRisk';
import EndpointDetection from './pages/TechnologyArsenalPages/EndpointDetection';
import DataEncryption from './pages/TechnologyArsenalPages/DataEncryption';
import ThreatIntelligence from './pages/TechnologyArsenalPages/ThreatIntelligence';
import SecurityAutomation from './pages/TechnologyArsenalPages/SecurityAutomation';
import SecureDevOps from './pages/TechnologyArsenalPages/SecureDevOps';
import MobileDevice from './pages/TechnologyArsenalPages/MobileDevice';
import DDoS from './pages/TechnologyArsenalPages/DDoS';
import SecurityTraining from './pages/TechnologyArsenalPages/SecurityTraining';
import DefenderMXDR from './pages/CyberDefensePage/DefenderMXDR';
import CPSCM from './pages/TrainingPages/CPSCM';
import CAISS from './pages/TrainingPages/CAISS';
import ISACA from './pages/TrainingPages/ISACA';
import CDPM from './pages/TrainingPages/CDPM';
import CNISTS from './pages/TrainingPages/CNISTS';
import AboutUs from './pages/CompanyPages/AboutUs';
import Career from './pages/CompanyPages/Career';
import ContactUs from './pages/CompanyPages/ContactUs';
import GovernanceEngine from './pages/GovernanceEngine';
import ThreatsVulnerability from './pages/ThreatsVulnerability';
import TrainingMain from './pages/TrainingMain';
import Header from './widgets/layout/Header';
import GlobalSecurityCompliance from './pages/ComplianceCompassPages/GlobalSecurityCompliance';
import RegionalSecurityCompliance from './pages/ComplianceCompassPages/RegionalSecurityCompliance';
import PrivacyCompliance from './pages/ComplianceCompassPages/PrivacyCompliance';
import BusinessContinuity from './pages/ComplianceCompassPages/BusinessContinuity';
import GovernancePage from './pages/GovernanceEnginePages/GovernancePage';
import CustomCursor from './component/CustomCursor';
import CxTComponent from './component/HomePage1';
import IndustrySupport from './pages/IndustryPages/IndustrySupport';
import ScrollToTop from './component/ScrollTop';
import FollowUs from './component/FollowUs';
import "@fontsource/lato";
import RiskPage from './pages/GovernanceEnginePages/RiskPage';
import TechnologicalRiskmanagement from './pages/TechnologyArsenalPages/TechnologicalRiskmanagement';
import ManagedSecurityPage from './pages/TechnologyArsenalPages/ManagedSecurityPage';
import NewContactPage from './component/NewContactPage';
import WorkWithUs from './pages/CompanyPages/Career';
import NetworkSecurity from './pages/TechnologyArsenalPages/NetworkSecurity';
import AdvancedSecurity from './pages/TechnologyArsenalPages/AdvancedSecurity';
import OperationalSecurity from './pages/TechnologyArsenalPages/OperationalSecurity';
import EmergingThreat from './pages/TechnologyArsenalPages/EmergingThreat';
import ApplicationSecurity from './pages/TechnologyArsenalPages/ApplicationSecurity';
import ComplianceCloudSecurity from './pages/TechnologyArsenalPages/ComplianceCloudSecurity';
import PrivacyPolicy from './component/PrivacyPolicy';
import TermsAndConditions from './component/TermsCondition';
import Leadership from './pages/ComplianceCompassPages/Leadership';
import ManagedLegal from './pages/ComplianceCompassPages/ManagedLegal';
import EmployeeTraining from './pages/ComplianceCompassPages/EmployeeTraining';
import BlogPage from './pages/ComplianceCompassPages/BlogPage';
import ScrollToTops from './component/ScrollToTop';

// import Marketplace from './components/Marketplace';
// import Resources from './components/Resources';
// import Contact from './components/Contact';
// import OnlineStores from './components/OnlineStores';
// import Segmentation from './components/Segmentation';
// Import other Mega Menu item components

function App() {
  return (
    <Router>
      {/* <CustomCursor /> */}
      {/* <ScrollToTop /> */}
      <ScrollToTops />
      {/* <FollowUs /> */}
      <Navbar />
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/marketplace" element={<Profile />} />
        <Route path="/resources" element={<SignIn />} />
        <Route path="/contact" element={<SignUp />} />
        <Route path="/cxtcomponent" element={<CxTComponent />} />

        {/* Compliance */}
        <Route path="/pcdss" element={<PCDSS />} />
        <Route path="/pcpin" element={<PCPIN />} />
        <Route path="/pc3ds" element={<PC3DS />} />
        <Route path="/pcp2pe" element={<PCP2PE />} />
        <Route path="/pcicard" element={<PCICard />} />
        <Route path="/pcssf" element={<PCSSF />} />
        <Route path="/pcsaq" element={<PCSAQ />} />
        <Route path="/isms" element={<ISMS />} />
        <Route path="/pims" element={<PIMS />} />
        <Route path="/bcms" element={<BCMS />} />
        <Route path="/soc" element={<SOC />} />
        <Route path="/hitrust" element={<HITRUST />} />
        <Route path="/cisa" element={<CISA />} />
        <Route path="/nist" element={<NIST />} />
        <Route path="/synergy" element={<SynergizedModel />} />
        <Route path="/isa" element={<ISA />} />
        <Route path="/swiftcsf" element={<SWIFTCSF />} />
        <Route path="/compliance" element={<ComplianceCompass />} />
        <Route path="/governaceengine" element={<GovernanceEngine />} />
        <Route path="/Threats" element={<ThreatsVulnerability />} />
        <Route path="/Training" element={<TrainingMain />} />
        <Route path="/globalsecurity" element={<GlobalSecurityCompliance />} />
        <Route path="/regionalsecurity" element={<RegionalSecurityCompliance />} />
        <Route path="/privacycompliance" element={<PrivacyCompliance />} />
        <Route path="/businesscontinuity" element={<BusinessContinuity />} />
        <Route path="/governancepage" element={<GovernancePage />} />
        <Route path="/riskpage" element={<RiskPage />} />
        <Route path="/technological" element={<TechnologicalRiskmanagement />} />
        <Route path="/managedsecurity" element={<ManagedSecurityPage />} />
        <Route path="/newcontactpage" element={<NewContactPage />} />
        <Route path="/advancedsecurity" element={<AdvancedSecurity />} />
        <Route path="/operationalsecurity" element={<OperationalSecurity />} />
        <Route path="/emergingthreat" element={<EmergingThreat />} />
        <Route path="/networksecurity" element={<NetworkSecurity />} />
        <Route path="/applicationsecurity" element={<ApplicationSecurity />} />
        <Route path="/compliancecloudsecurity" element={<ComplianceCloudSecurity />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/leadership-compliance" element={<Leadership />} />
        <Route path="/managedsecurity-legalsupport" element={<ManagedLegal />} />
        <Route path="/employeetraining-awareness" element={<EmployeeTraining />} />

        {/* Governance Engine */}
        <Route path="/securityarchitecture" element={<SecurityArchitecture />} />
        <Route path="/riskassessment" element={<RiskAssessment />} />
        <Route path="/governanceframework" element={<GovernanceFramework />} />
        <Route path="/securityprogram" element={<SecurityProgram />} />
        <Route path="/securitypolicy" element={<SecurityPolicy />} />
        <Route path="/thirdpartyrisk" element={<ThirdPartyRisk />} />
        <Route path="/datagovernance" element={<DataGoverance />} />
        <Route path="/metricandreporting" element={<MetricandReporting />} />
        <Route path="/incidentresponse" element={<IncidentResponse />} />
        <Route path="/cybercrisis" element={<CyberCrisis />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/cybersecurityforensic" element={<CyberSecuirtyForensic />} />
        <Route path="/icssecurity" element={<ICSSecurity />} />
        <Route path="/cloudsecurity" element={<CloudSecurity />} />
        <Route path="/virtualciso" element={<VirtualCISO />} />
        <Route path="/dpo" element={<DPO />} />
        <Route path="/dataprivacy" element={<DataPrivacy />} />
        <Route path="/industrysupport" element={<IndustrySupport />} />

        {/* Threat & Vulnerability */}
        <Route path="/networkarchitecture" element={<NetworkArchitecture />} />
        <Route path="/networkvulnerability" element={<NetworkVulnerability />} />
        <Route path="/webapplication" element={<WebApplication />} />
        <Route path="/mobileapplication" element={<MobileApplication />} />
        <Route path="/advancepenetration" element={<AdvancePenetration />} />
        <Route path="/configurationmanagement" element={<ConfigurationManagement />} />
        <Route path="/compliancefocused" element={<ComplianceFocused />} />
        <Route path="/vulnerabilityredemtion" element={<VulnerabilityRemediation />} />
        <Route path="/redteamassessment" element={<RedTeamAssessment />} />
        <Route path="/purpleteamassessment" element={<PurpleTeamAssessment />} />
        <Route path="/wirelesssecurity" element={<WirelessSecurity />} />
        <Route path="/socialengineering" element={<SocialEngineering />} />
        <Route path="/iotsecurity" element={<IoTSecurity />} />
        <Route path="/cloudsecurityassessment" element={<CloudSecurityAssessment />} />
        <Route path="/sourcecodereview" element={<SourceCodeReview />} />
        <Route path="/threatmodelling" element={<ThreatModelling />} />
        <Route path="/attacksurfaceanalysis" element={<AttackSurfaceAnalysis />} />
        <Route path="/devsecops" element={<DevSecOps />} />
        <Route path="/ransomeware" element={<Ransomeware />} />
        {/* Technology Arsenal */}
        <Route path="/dataleakageprevention" element={<DataLeakage />} />
        <Route path="/identityaccessmanagement" element={<IdentityAccess />} />
        <Route path="/siem" element={<SIEM />} />
        <Route path="/xdr" element={<XDR />} />
        <Route path="/datadiscovery" element={<DataDiscovery />} />
        <Route path="/webapplicationfirewall" element={<WebApplicationFirewell />} />
        <Route path="/grc" element={<GovernanceRisk />} />
        <Route path="/edr" element={<EndpointDetection />} />
        <Route path="/dataencryption" element={<DataEncryption />} />
        <Route path="/threatintelligence" element={<ThreatIntelligence />} />
        <Route path="/securityautomation" element={<SecurityAutomation />} />
        <Route path="/securedevops" element={<SecureDevOps />} />
        <Route path="/mobiledevicemanagement" element={<MobileDevice />} />
        <Route path="/ddosprotection" element={<DDoS />} />
        <Route path="/securitytraining" element={<SecurityTraining />} />
        {/* CyberDefence */}
        <Route path="/defendermxdr" element={<DefenderMXDR />} />
        {/* Training */}
        <Route path="/cpscm" element={<CPSCM />} />
        <Route path="/caiss" element={<CAISS />} />
        <Route path="/isaca" element={<ISACA />} />
        <Route path="/cpdm" element={<CDPM />} />
        <Route path="/cnists" element={<CNISTS />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* Company */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/career" element={<WorkWithUs />} />
        {/* <Route path="/career" element={<Career />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
