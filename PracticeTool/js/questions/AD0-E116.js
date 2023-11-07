let developer = [
    {
      "title": "A developer needs to create a banner component. This component shows an image across the full width of thepage. A title is shown on top of the image. This text can be aligned to the left, middle, or right. The corecomponents feature a teaser component which matches almost all requirements, but not all.\nWhat is the most maintainable way for the developer to implement these requirements?\n",
      "options": [
        "Use and configure the teaser core component\n",
        "Create a new custom component from scratch.\n",
        "Overlay the teaser core component.\n",
        "Inherit from the teaser core component.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "A developer is working on a complex project with multiple bundles. One bundle provides an OSGi service forother bundles.\nWhich two options are necessary to ensure that the other bundles can reference that OSGi service? (Choose two)\n",
      "options": [
        "The bundles consuming the service need to import the fully qualified name of the service interface.\n",
        "The service needs to correctly declare metatype information.\n",
        "The bundle providing the service needs to contain a whitelist of allowed consumer bundles.\n",
        "The bundle providing the service needs to contain an adequate SCR descriptor file.\n",
        "The bundle providing the service needs to export the java package of the service interface.\n"
      ],
      "answers": [
        "C",
        "E"
      ],
      "docs": ""
    },
    {
      "title": "The structure section of an editable template has a locked component.\nWhat happens to the content of that component when a developer unlocks it?\n",
      "options": [
        "The content stays in the same place but it ignored on pages using the template.\n",
        "The content is moved to the initial section of the editable template.\n",
        "The content is deleted after confirmation from the template author.\n",
        "The content is copied to the initial section of the editable template.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "Which log file contains AEM application request and response entries?\n",
      "options": [
        "response.log\n",
        "request.log\n",
        "history.log\n",
        "audit.log\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer creates a Sling Servlet. The Sling Servlet is bound to a path (/service/sling/sample). Refer to the resulting code below.\n@Component (inmediate=true,service = {Servlet.class})\n@SlingServletPaths(value ? {\"/service/sling/sample\"})\nWhat should the developer do to make the servlet access controlled using the default ACLs?\n",
      "options": [
        "Use @SlingServletResourceTypes instead of @SlingServletPaths. \n",
        "Modify @SlingServletPaths(value = {\"/bin/sling/sample\" }). \n",
        "Add @SlingServletName(servletName = \"AccessControlServlet\") annotation. \n",
        "Add @SlingServletPrefix(value = \"/apps\") annotation. \n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A developer wants to extend AEM Core Components to create a custom Carousel Component.\nHow should the developer extend the Core Components?\n",
      "options": [
        "Make changes to the original component and assign a component group.\n",
        "Use the sling:resourceSuperType property to point to the core component.\n",
        "Use the sling:resourceType property to point to the core component.\n",
        "Copy the Core Carousel component to /apps/<project> folder.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer wants to change the log level for a custom API.\nWhich OSGi configuration should the developer modify?\n",
      "options": [
        "Apache Sling Logging Configuration\n",
        "Apache Sling Log Tracker Service\n",
        "Apache Sling Logging Writer Configuration\n",
        "Adobe Granite Log Analysis Service\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A developer is installing a content package with the package manager. The developer needs to restrict theapproximate number of nodes in a batch that is saved to persistent storage in one transaction.\nHow should the developer modify the number of transient nodes to be triggered until automatic saving?\n",
      "options": [
        "AEM instances automatically modify the number of transient nodes based on the load balancing.\n",
        "Modify the export package manifest header and copy the content package to AEM installation folder.\n",
        "Select the option MergePreserve for the Access Control Handling drop-down in the Install Package dialog-box.\n",
        "Change the value of Save Threshold in the Install Package dialog-box.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs to implement a service component that should be manually configured by operations to react on operational circumstances. The service component should NOT be active by default. The service has the properties myservice.name (one string value) and myservice.stringValues (a list of the string values) to be configured.\nThe developer needs to use OSGi Metatype annotations to make those properties configurable in the Apache Felix Web Console.\nWhich set of steps should the developer take to meet these requirements?\n",
      "options": [
        "1. For the class fields myserviceName and myserviceStringValues, add a @AttributeDefinition annotation each with names set to myservice.name and myservice.stringValues respectively.\n2. Use the @Component annotation with configurationFactory = true on the service component class.\n3. Use the @Service service component class.\n4. Use the activate method of the service component class to get the configuration annotation interface class injected. \n",
        "1. Create an annotation interface as inner class of the service component and annotate it with @ObjectClassDefinition.\n2. Apply @AttributeDefinition for the methods myservice.name and myservice.stringValues.\n3. Use the @Component annotation with configurationPolicy = ConfigurationPolicy.REQUIRE on the service component.\n4. Use the @Designate annotation to link the service component to the created configuration annotation interface.\n5. Use the activate method of the service component class to get the configuration annotation interface class injected. \n",
        "1. Create an annotation interface as inner class of the service component and annotate it with @ObjectClassDefinition.\n2. Apply @AttributeDefinition for the methods myservice_name and myservice_stringValues.\n3. Use the @Component annotation with configurationPolicy = ConfigurationPolicy.REQUIRE on the service component.\n4. Use the @Designate annotation to link the service component to the created configuration annotation interface.\n5. Use the activate method of the service component class to get the configuration annotation interface class injected. \n",
        "1. For the class fields myserviceName and myserviceStringValues, add a @Property annotation each with names set to myservice.name and myservice.stringValues respectively.\n2. Use the @Component annotation with configurationFactory = true on the service component class.\n3. Use the @Service service component class.\n4. The configuration is automatically injected into the field by the service component runtime.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer creates Editable Templates based on a custom Page component. The developer wants toleverage the Style System within the Editable Templates to allow authors to switch between the Dark and Light Theme. The Style System dialog is NOT enabled for the site.\nWhat should the developer do to resolve this issue? *\n",
      "options": [
        "Define Style Definitions using Page Policy dialog on Editable Template.\n",
        "Create two new client libraries with a dark and light theme and map them to the Page component.\n",
        "Set the sling:resourceSuperType property to core/wcm/components/page/v2/page on the Page component.\n",
        "Create a new dialog for the custom Page components.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A Null Pointer Exception occurs if NO charLimit values is set in the component dialog.\nWhat should the developer do to resolve this issue?\n",
      "options": [
        "Replace the defaultValue=\"0\" attribute of the \"˜charLimit' field in the dialog with min=\"0\".\n",
        "Add the @Default annotation to the \"˜chatLimit' variable in the Sling Model.\n",
        "Replace the defaultValue=\"0\" attribute of the charLimit field in the dialog with defaultValue=\"{Long}0\".\n",
        "Change the defaultInjectionStrategy of the Truncation Sling Model to DefaultInjectionStrategy.REQUIRED.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "After adding new features, a developer's environment is experiencing slowness before ultimately running out ofmemory. The initial log analysis points towards a large number of open sessions.\nWhich action should the developer take to further monitor the overall session count on this AEM instance? *\n",
      "options": [
        "Run the following command to generate thread dumps jstack -l <pid> >> threaddumps.log,analyze thread dumps to find long running sessions.\n",
        "Go to Web Console > Status > Threads, verify the overall thread count.\n",
        "Go to Tools > Operations > Monitoring. Create a new report based on Number of Active Sessions as metric\n",
        "Go to <aem-install>/crx-qiuckstart/logs/strderr/log, use the following command grep -o 'CRXSessionImpl' strderr.log| wc -l.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "An online insurance company website has user-generated content that must be replicated in all publishinstances.\nWhat action should the developer take to achieve this?\n",
      "options": [
        "Configure the dispatcher flush agent in publish instance.\n",
        "Configure reverse replication agents for the author.\n",
        "Configure the replication agent in the publish instances.\n",
        "Disable static agent in the author instance.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer must create a workflow step that assigns a 'WorkItem' to the appropriate person based on whohas the least amount work to do.The group that must perform the action is configured into the workflow.\nWhich non-deprecated interface should the Java implementation class use to perform the assignment?\n",
      "options": [
        "com.adobe.granite.workflow.exec.ParticipantStepChooser\n",
        "com.day.cq.workflow.exec.ParticipantChooser\n",
        "com.day.cq.workflow.exec.WorkItem\n",
        "com.adobe.granite.workflow.exec.WorkflowData\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "From which AEM Web Console should a developer access and download full AEM Log Files?\n",
      "options": [
        "Web Console -> System Information\n",
        "Status -> Log files\n",
        "OSGI -> Sing Log Service\n",
        "AEM -> Log files\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs to create a new component called \"Component A\". Component A must show a list of othercomponents that all have a resource type of existing \"Component B\". Component A must render this list of tilesfor each Component B where the tile rendering is different from the default one. The list of rendered tiles must be reusable by future new components.\nHow should the developer implement this functionality?\n",
      "options": [
        "Create a script for tile rendering in Component B and use data-sly-resource attribute with a Sling selector in Component A to render the tile.\n",
        "Component A overlays Component B and overwrites the base renderer to facilitate the tiles.\n",
        "Component A inherits from Component B and overwrites the base renderer to facilitate the tiles.\n",
        "Component A calls the HTL of Component B directly using a data-sly-include attribute.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "For each CRX node in the hierarchy, which actions can be configured using the user admin interface?\n",
      "options": [
        "Read, Modify, Create, Delete, Read ACL, Edit ACL, Replicate\n",
        "Read, Write, Read ACL, Edit ACL, Replicate\n",
        "Read, Write, Delete, Edit ACL, Replicate\n",
        "Read, Modify, Create, Delete, Read ACL, Edit ACL\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "An application runs specific license checks against certain DAM assets every day. It should send an email to aconfigured list if it finds warnings, and mark the asset accordingly. A service component that uses the ApacheSling Scheduler Service is created. DAM assets that must NOT be used anymore are hidden using ACLs andthe license check must re-check them.\nHow should a developer obtain a resource resolver that can read and update the DAM assets?\n",
      "options": [
        "Set up a cron job with curl calls with the admin user and use request.getResourse ().getResourceResolver().\n",
        "Create a configuration line in PID com.day.cq.security.ACLSetup for the user that you obtain a session for via ResourceResolverFactory.getResourceResolver(...).\n",
        "Configure the user admin in PID org.apache.sling.serviceusermapping.impl.ServiceUserMapperImpl as user.default and make sure the service user exists and has jcr:read and jcr:write permissions.\n",
        "Create a configuration for PID org.apache.sling.serviceusermapping.impl.ServiceUserMapperImpl.amendeddamaccess that references a pre-created service user with r/w permissions and use ResourceResolverFactory.getServiceResourceResolver(...).\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "A developer is creating templates and/or components using CRXDE Lite. The developer needs to check thefiles into source control.\nWhich tool should the developer use to achieve this goal?\n",
      "options": [
        "vlt command\n",
        "Content Explorer\n",
        "http://localhost:4502/crx/checkout\n",
        "mvn command\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A custom AEM application is using the PageManager API.\nWhat should a developer add to make the application compile and run correctly in AEM?\n",
      "options": [
        "a maven dependency to AEM uber-jar to the content package\n",
        "a maven dependency to bundle cq-wcm-core to the application bundle\n",
        "a maven dependency to AEM uber-jar to the application bundle\n",
        "a maven dependency to bundle cq-wcm-api to the content package\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "How should a developer enable remote debugging of an AEM server without modifying the AEM start script?\n",
      "options": [
        "Enable the remote debugging service through the AEM Cloud Services menu.\n",
        "Rename the quickstart jar file to include the additional debug settings.\n",
        "Enable the remote debugging service through the AEM Web Console.\n",
        "Include an additional JVM parameter when starting AEM with java -jar.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "A developer developed a workflow that makes a copy of every node created or modified under a certain pathto a different one. The workflow launches but the nodes are not copied over.\nWhich two methods should the developer use to resolve this issue? (Choose two.)\n",
      "options": [
        "Go to Workflow Failures screen and check if any instances of the workflow are present. \n",
        "Go to Workflow instances screen and verify that the instance of the workflow is present and check its status. \n",
        "Go to Package Manager screen and reinstall the bundle that contains the workflow so it restarts. \n",
        "Go to Workflow Models screen, then delete and recreate the workflow. \n",
        "Go to Workflow Launchers and create a new launcher for the workflow even if one already exists.\n"
      ],
      "answers": [
        "A",
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer creates an AEM editable template that includes a Layout Container. When the developer createsa page using this template, the Layout Container placeholder does NOT appear.\nWhat is causing this issue?\n",
      "options": [
        "The Layout Container does NOT have a policy.\n",
        "The page template has NOT been enabled.\n",
        "The page template has NOT been published.\n",
        "The Layout Container has NOT been unlocked.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Too many pages are invalidated in the dispatcher cache when a page is published.\nWhat is most likely causing this issue in the dispatcher configuration?\n",
      "options": [
        "Sticky session are NOT configured properly, resulting in requests being delivered to the wrong server\n",
        "The level of cache invalidation is NOT appropriate for the published content model.\n",
        "File globbing in the dispatcher configuration is NOT correct\n",
        "The OS file system permissions are NOT properly configured.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "The requirement for the dialog is that the \"Align text\" field is shown after the \"Title\" field.\nWhat should the developer do without changing Component B?\n",
      "options": [
        "Move the align node from Component A to Component B and order them according the requirements.\n",
        "Extend Component B with the functionality of Component A.\n",
        "Add the property sling:orderBefore=\"description\" to the align node.\n",
        "Move all nodes under the item node from Component B to Component A and order them according the requirements.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A service component periodically retrieves content from an external REST interface and saves the informationin JCR. The REST endpoint is configured via an OSGi service property. There is one URL for production(runmode prod) and another URL for all other environments.\nHow should a developer configure the OSGi service?\n",
      "options": [
        "Underneath /apps/<project>/settings, create the sub folders global and prod and node with name <PID>.conf each and configure the properties via node properties.\n",
        "Underneath /config/<project>/settings, create the sub folders config.default and config.prod and a file with the name <PID>.config each and list the properties as key value pairs in there \n",
        "Underneath /apps/<project>, create the sub folders config and config.prod and a file with the name <PID>.config each and list the properties as key value pairs in there.\n",
        "Underneath /config/<project>/settings, create the sub folders config and config.prod and a file with the name <PID>.config each and list the properties as key value pairs in there.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "What is the artifact ID of the maven dependency that contains all core AEM APIs?\n",
      "options": [
        "core-jar\n",
        "api-jar\n",
        "aem-jar\n",
        "uber-jar\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "There are performance, stability, and security issues with an installed AEM instance.\nWhat should a developer do to fix these issues?\n",
      "options": [
        "Delete and reinstall the AEM instance.\n",
        "Install Adobe-provided Apache configuration file.\n",
        "Stop, clear cache files, and restart the AEM instance.\n",
        "Install service pack updates from package share.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "One content package of a custom application contains the following content paths.\n/apps/muproj/install\n/apps/myproj/components\n/apps/myproj/i18n\nThe server also contains the content path /apps/myproj/configuration that must NOT be touched when installing the package.\nWhich two filter definitions should a developer use to always update only the contained paths upon installation in the server? (Choose two.)\n",
      "options": [
        "<filter root=\"/apps/myproj\">\n    <exclude pattern=\"configuration.*\"/>\n</filter>\n",
        "<filter root=\"/apps/myproj\">\n    <include pattern=\".*\"/>\n    <exclude pattern=\"configuration.*\"/>\n</filter>\n",
        "<filter root=\"/apps/myproj\">\n    <exclude pattern=\"apps/myproj/configuration.*\"/>\n</filter>\n",
        "<filter root=\"/apps/myproj\" mode=\"merge\">\n</filter>\n",
        "<filter root=\"/apps/myproj\">\n    <include pattern=\"/apps/myproj/(install|components|i18n).*\"/>\n</filter>\n"
      ],
      "answers": [
        "C",
        "E"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs to ensure that the path /content/<proj>/segments exists on all environments with thecorrect initial content that the developer provides in a package. Content that exists in that path should NOT beaffected.\nWhich import mode should the developer use in the filter definition?\n",
      "options": [
        "update\n",
        "merge\n",
        "replace\n",
        "optional\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer has a component located under the path /apps. This component has a Client Library which isdirectly loaded onto a page. The publish instance loads the page correctly. The dispatcher also loads the page but the Client Library is missing.\nHow should the developer resolve this issue, while taking security into consideration?\n",
      "options": [
        "Change the ACLs for the Client Library.\n",
        "Move the Client Library under /apps/<project>library.\n",
        "Add the property allowProxy with a boolean value true.\n",
        "Allow the path to the clientlibs on the dispatcher.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer creates a custom Client Library named foobar.This Client Library embeds 5 other Client Libraries and contains 10 JavaScript source files. One of these files,called foo.js, has a bug on line 8 which causes an exception. The Client Library is throwing this exception online 1350 when it is included on a webpage.\nHow should a developer find the exact line in foo.js where the exception has been thrown?\n",
      "options": [
        "1. Enable JS/CSS minification in OSGi configuration console for HTML Library Manager\n2. Check the JavaScript exception log in the OSGi web console\n",
        "1. Temporarily remove the embedded Client Libraries of the foobar Client Library.\n2. Use the browser JavaScript debugging tools.\n",
        "1. Add the selector debugClientLibs to the page request.\n2. Check the JavaScript exception log in the OSGi web console\n",
        "1. Add the query parameter debugClientLibs=true to the request.\n2. Use the browser JavaScript debugging tools.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Which maven plugin is required to install a content package on a local AEM environment using maven?\n",
      "options": [
        "Maven Install Plugin\n",
        "FileVault Package Maven Plugin\n",
        "Content Package Maven Plugin\n",
        "Maven Bundle Plugin\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs to implement a functionality that requires creating a Custom Workflow Step.\nWhich two steps should the developer take to start developing the custom behavior? (Choose two.)\n",
      "options": [
        "Implement a Java class with this method \"public void process(WorkItem item, WorkflowSession wfsession) throws WorkflowException\".\n",
        "Implement a Java class extending from class com.adobe.granite.workflow.exec.WorkflowProcess.\n",
        "Create a Workflow component node of the Super Resource Type \"cq/workflow/components/model/process\" under the folder /apps//components.\n",
        "Implement a Java class implementing the interface com.adobe.granite.workflow.exec.WorkflowProcess.\n",
        "Create a Workflow component node of the Super Resource Type \"cq/workflow/components/step\" under the folder /etc/workflow/models.\n"
      ],
      "answers": [
        "C",
        "D"
      ],
      "docs": ""
    },
    {
      "title": "In which two ways can a developer keep simple and maintainable CRX Access Control Lists? (Choose two.)\n",
      "options": [
        "Delete the 'everyone' group.\n",
        "Use Deny statements sparingly.\n",
        "Assign access rights to user groups rather than users.\n",
        "Assign access rights user by user.\n"
      ],
      "answers": [
        "B",
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer wants to create a Client Library that will only be included on touch enabled devices.\nWhat action should the developer take to achieve this?\n",
      "options": [
        "Add the line \"#base=touch\" to the js.txt and css.txt files in the Client Library Folder.\n",
        "Create a resource folder called \"touch\" under the Client Library Folder.\n",
        "Set the channels property on the Client Library Folder to \"touch\".\n",
        "Pass the parameter user-agent='touch' when referencing the Client Library.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer is working on a project locally and needs to install packages manually. The deployments to thelocalhost must be automated to speed up development. This functionality must be toggled on and off,depending on the needs of the developer.\nWhich step should the developer take to achieve this?\n",
      "options": [
        "Configure the maven install plugin by defining the target URL, username, and password as maven properties.\n",
        "Run maven with the deploy phase. Maven will install the package on all local AEM instances running without further configuration.\n",
        "Add a maven profile and configure the content package maven plugin within this profile.\n",
        "Write a script that does a PUT call to AEM each time maven builds a new package.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which xml tag is used within the vault package definition to add a new path to a content package?\n",
      "options": [
        "<filter>\n",
        "<content>\n",
        "<path>\n",
        "<rule>\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A developer wants to automatically truncate request log files once they exceed 10 MB.\nWhich OSGi configuration should the developer modify?\n",
      "options": [
        "Apache Sling Customizable Request Data Logger\n",
        "Adobe Granite Log Analysis Service\n",
        "Apache Sling Logging Writer Configuration\n",
        "Apache Sling Logging Configuration\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A Client-Side Library has the category \"library.example\".\nWhich HTL statement should a developer use to reference only the CSS files of this Client-Side Library?\n",
      "options": [
        "<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"${clientlib.css @ categories='library.example'}\"/>\n",
        "<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"${clientlib.css @ category='library.example'}\"/>\n",
        "<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"${clientlib.all @ categories='library.example.css'}\"/> categories='library.example.css'}\"/>\n",
        "<sly data-sly-use.clientlib=\"/libs/granite/sightly/templates/clientlib.html\" data-sly-call=\"${clientlib.all @ type='css', categories='library.example'}\"/>\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs to install a content package on AEM environment. However, a content package with thesame name is already installed.\nWhat would you be the safest way for the developer to install the content package to make sure only thechanges of the new content package get applied?\n",
      "options": [
        "Use the \"Force Upload option when uploading the new content package.\n",
        "Uninstall the existing content package before installing the new content package.\n",
        "Upload the content package to the CRX Package Share before installing it.\n",
        "Install the content package using the OSGi web console.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer is creating a custom component on the page /latestBlogs.html that needs to list all the titlesof the blogs pages under /content/blogs.\nHow does this component get the list of child pages?\n",
      "options": [
        "Instantiate a node object with session.getNode(/content/blogs) and then iterate through the child nodes and print the title for each.\n",
        "Use PageManager.getPage(\"/content/blogs\") of the static PageManager class to instantiate a Page object and then iterate through the child pages and print the title for each.\n",
        "Use the QueryDebugger to look for all children of /content/blogs and then iterate through the result set and print the title for each.\n",
        "Adapt the resourceResolver to the PageManager service, then use the getPage(/content/blogs) to instantiate a Page object and then iterate through the child pages and print the title for each.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A banking AEM application contains functionality to calculate a mortgage rate based on user input. A servlet inplace calculates the result in the backend. A call to an internal third-party REST service is required to retrievethe average object value based on a given zip code.\nThe following three service interfaces are used:MortgageCalculationServlet, MortgageCalculationService andObjectValueLookupRestService where MortgageCalculationServlet has a dependency toMortgageCalculationService and MortgageCalculationService has a dependency toObjectValueLookupRestService.\nThe calculation has many combinations of input parameters and edge cases, so the JUnit coverage must beas high as possible.\nWhich two strategies should the developer use to ensure testability of the application code? (Choose two.)\n",
      "options": [
        "Use BundleContext.getServiceReference(…) and BundleContext.getService(…) in application code to look up the required services just before usage.\n",
        "Use static methods to avoid boilerplate in application code.\n",
        "Use a mock framework to be able to create and inject mocks in the test code.\n",
        "Use the standard OSGi @Reference annotation to wire the dependencies in application code\n",
        "Deploy a third party dependency injection container to wire dependencies more efficiently in application code.ç\n"
      ],
      "answers": [
        "A",
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer creates an editable template with a Layout Container. The developer needs to restrict the LayoutContainer to just one column layout.\nWhat should the developer do to the editable template to enforce this restriction?\n",
      "options": [
        "Using Template Editor, set the responsive settings to 1 column for Layout Container Policy.\n",
        "Add responsive column control component to the template and set column type to 1.\n",
        "Overlay wcm.foundation.components.page.responsive Client Library and set @max_col to 1.\n",
        "Using Template Editor, lock the Structure Component for the template.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A custom AEM application has a run time dependency to a third party OSGi bundle that is NOT included inout-of-the-box AEM. The third party dependency needs to be available for multiple applications and beupgraded separately from the custom AEM application.\nHow should a developer make sure that the bundle is installed on all environments?\n",
      "options": [
        "Add the dependency to the third party bundle in the pom.xml of the project bundle.\n",
        "Embed the third party bundle in the bundle that depends on it.\n",
        "Embed the bundle in a content package to have it automatically deployed.\n",
        "Declare the dependency correctly using a link to the OSGi Bundle Repository (OBR).\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer running a local AEM instance and working on an AEM project needs to change a large number offiles locally in the filesystem. The developer needs to get the changes uploaded to the local AEM instance toverify changes almost immediately in the browser?\nWhat action should the developer take to most efficiency meet these requirements?\n",
      "options": [
        "Access CRXDE and upload the files through the interface.\n",
        "Make the changes in CRXDE create a content package, download it, and expand it into the working directory after each change.\n",
        "Install FileVault bundle in the AEM instance and register the local working directory for synchronization.\n",
        "Build a Content Package using maven and deploy it after each change.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A custom AEM application contains a service component that needs to access the JCR repository within theactivate method. The activate method usesResourceResolverFactory.getServiceResourceResolver(…) without specifying a sub servicename.\nWhat should a developer do to make sure the user service mapping for the service component is available?\n1/1\n",
      "options": [
        "Create a field of type ServiceUserMapped and annotate it with @Reference.\n",
        "Wait for the service ServiceUserMapper via BundleContext.getServiceReference(…).\n",
        "Create a field of type ServiceUserMapped and annotate it with @Reference using ReferencePolicy.DYNAMIC.\n",
        "Create a field of type ServiceUserMapper and annotate it with @Reference using ReferencePolicy.STATIC.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "After a recent code deployment, an AEM site is experiencing longer than usual query execution time. The deployment package contained some new Lucene index definitions. A developer needs to identify the long running queries and confirm that the new index definitions are getting applied correctly.\nWhich action should the developer take to investigate this problem?\n",
      "options": [
        "Go to Tools > Operations >Diagnosis > Download Thread Dumps. Analyze the Thread Dumps to identify long running requests.\n",
        "Go to Tools > Operations >Diagnosis > Log Message. Configure DEBUG log level on com.day.cq.search to monitor search queries.\n",
        "Go to Tools > Operations > Diagnosis > Index Manager. Select the new Indexes and run a consistency check.\n",
        "Go to Tools > Operations >Diagnosis > Query Performance > Slow Queries. Select a Query and Click on Explain.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/operations/operations-dashboard.html?lang=en"
    },
    {
      "title": "A developer installs the latest Service pack to a local AEM author instance.\nHow should the developer install this package on the publish instance?\n",
      "options": [
        "Replicate from package manager of publish instance.\n",
        "Use upload/install from OSGI console of publish instance.\n",
        "Use upload/install from OSGI console of author instance.\n",
        "Replicate from package manager of author instance.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Two AEM publish feed a single Dispatcher.\nWhich part of the Dispatcher configuration should a developer review to ensure both AEM publish instance areused?\n",
      "options": [
        "virtualhosts\n",
        "cache\n",
        "filter\n",
        "farms\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs an existing workflow to run only when pages are created under a certain folder\nWhat should the developer create to achieve this?\n",
      "options": [
        "A Launcher with the field exclude that has the value !jcr:nodetype==cq:Page\n",
        "A Launcher with the field path pointing to the folder and nodetype field have the value cq:Page.\n",
        "A Launcher with the field path pointing to the folder and condition field and have the value jcr:content/jcr:primaryType==cq:Page.\n",
        "A Launcher with the field condition that has the value jcr:content/page.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer creates a template-type for building editable templates.\nThe resulting editable templates and pages must always contain a specific layout container that can NOT bedeleted by the author.\nHow should the developer meet this requirement?\n",
      "options": [
        "Add the layout container component by including it on the actual page component.\n",
        "Add a content policy to the template-type to disable the removal of the layout container.\n",
        "Add the layout container component to the initial section of the template-type.\n",
        "Add the layout container component to the structure section of the template-type.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "An application contains an OSGi configuration that contains a password.\nHow should a developer prevent this sensitive information from being stored in plain text in JCR?\n",
      "options": [
        "1. Use console at /system/console/crypto to encrypt the value.\n2. Either create an encrypted value for each AEM instance and use runmodes to apply the different values or make sure relevant instances share the same master key.\n3. When loading the value in the code, call CryptoSupport.unprotect(…) before using the value.\n",
        "1. Use console at /system/console/configMgr and tick the checkbox \"encrypt\" before saving a configuration.\n2. Use encrypted values work across all instances.\n3. When loading the value in the code, call CryptoSupport.unprotect(…) before using the value.\n",
        "1. Use console at /system/console/ configMgr and tick the checkbox \"encrypt\" before saving configuration.\n2. Either create an encrypted value for each AEM instance and use runmodes to apply the different values or make sure relevant instances share the same master key.\n3. Sensitive information is automatically decrypted using the CryptoSupport OSGi service before the value is returned.\n",
        "1. Use console at /system/console/crypto to encrypt the value.\n2. Either create an encrypted value for each AEM instance and use runmodes to apply the different values or make sure relevant instances share the same master key\n3. Sensitive information is automatically decrypted using the CryptoSupport OSGi service before the value is returned.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "Which environment variable in the AEM start script should a developer modify to enable remote debugging?\n",
      "options": [
        "CQ_HOST\n",
        "CQ_JVM_OPTS\n",
        "CQ_PORT\n",
        "CQ_RUNMODE\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "AEM is installed in $AEM_HOME.\nIn which subfolder are the command line startup and shutdown scripts located?\n",
      "options": [
        "$AEM_HOME/crx-quickstart/bin/\n",
        "$AEM_HOME/crx-quickstart/scripts/\n",
        "$AEM_HOME/\n",
        "$AEM_HOME/crx-quickstart/opt/\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "A customer bundle of an application is in state \"Installed\" after deploying it with Maven.\nWhat should a developer do to change it to state \"Active\"?\n",
      "options": [
        "Use the \"Update\" action for the bundle in the Apache Felix Web Console.\n",
        "Use the \"Start\" action for the bundle in the Apache Felix Web Console.\n",
        "Reinstall the content package using the package manager.\n",
        "Ensure all OSGi requirements are met and re-deploy using Maven.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which log file should a developer use to search for exception stack traces?\n",
      "options": [
        "<aem-install>/crx-quickstart/logs/request.log\n",
        "<aem-install>/crx-quickstart/logs/error.log\n",
        "<aem-install>/crx-quickstart/logs/access.log\n",
        "<aem-install>/crx-quickstart/logs/info.log\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs to configure sets of values according to the following parameters:\nVaries for different staging environments\nVaries for different content paths\nDiffers between author and publish\nWhich implementation strategy should the developer use to meet these requirements?\n",
      "options": [
        "A custom cloud configuration\n",
        "A context aware configuration with buckets using an OSGi configuration\n",
        "One OSGi configuration for the set of values with runmodes\n",
        "A JCR property at the content root node of the site with inheritedPageProperties\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "In which maven build phase is the content package assembled?\n",
      "options": [
        "compile\n",
        "deploy\n",
        "package\n",
        "install\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "A developer needs to change the label \"Sites\" in the navigation of AEM author to \"Websites\".\nWhich action should the developer take to achieve this?\n",
      "options": [
        "Modify the node /libs/cq/core/content/nav/sites by updating the icr:title property value.\n",
        "Change the code of /libs/granite/ui/components/shell/clientlibs/shell/js/globalnav.js to display the new value.\n",
        "Create a new node /apps/cq/core/content/nav/sites and update the property icr:title.\n",
        "Modify the code of /libs/granite/ui/components/shell/globalnav/overlay/overlay.jsp to display the new value.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "An AEM site experiences slower page loads. A developer needs to identify the slow running requests.\nHow should a developer analyze the requests with long response times?\n",
      "options": [
        "Use rlog.jar with the following command $ java -jar ../opt/helpers/rlogs.jar -n 10 requests.log to identify long running requests.\n",
        "Use proxy.jar with the following command java -jar proxy.jar <host> <remoteport> <localport> to debug the webserver and AEM server communication.\n",
        "Download Heapdumps from Tools > Operations > Diagnosis and analyze the Heapdumps using the Memory Analyzer Tool.\n",
        "Embed /libs/foundation/components/timing component in the Page Component and verify the page load time.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "Which property should be used to find the repository where the configuration changes made in theWeb Console are saved?\n",
      "options": [
        "Persistent Identity (PID)\n",
        "Reference Repository\n",
        "Component.id\n",
        "Component.name\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "Which statement about the usage of declarative services while creating an OSGi component is true?\n",
      "options": [
        "@Property annotation is used to reference to other services from the component by component runtime\n",
        "@Reference annotation is optional and used to define properties available to the component\n",
        "@Component annotation is the only required annotationand missing which will NOT declare the class as component\n",
        "@Service annotation is required and describes which service Interface Is served by thecomponent\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which three statements about replicate permissions on a resource are true? (Choose three).\n",
      "options": [
        "The replication rights are evaluated bottom-up in the node tree.\n",
        "The allow replication rights has higher precedence than deny replication rights.\n",
        "To grant replication rights to a user on any resource, user has to have read permissions for/etc/replication, /bin.\n",
        "The allow replication rights has lower precedence than deny replication rights.\n"
      ],
      "answers": [
        "A",
        "B",
        "C"
      ],
      "docs": ""
    },
    {
      "title": "What are three causes if Dispatcher stopped updating cache files in the cache directory on theWebserver? (Choose three).\n",
      "options": [
        "The request to the page in question contain query string parameters.\n",
        "The request to the page in question has authorization headers and dispatcher.any does no contain allowAuthorized.\n",
        "Dispatcher Flush agent is disabled on publish instance.\n",
        "The request URI of the page in question should always start with /content.\n"
      ],
      "answers": [
        "A",
        "B",
        "C"
      ],
      "docs": ""
    },
    {
      "title": "In a typical author, publish and dispatcher setup,\nwhere is the dispatcher flush configured?\n",
      "options": [
        "In the author instance.\n",
        "In the publish instance\n",
        "In the dispatcher module.\n",
        "At the webserver level.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "Which jar name can NOT be used to install an AEM publish instance?\n",
      "options": [
        "aem-publish-p4503, jar\n",
        "cq5-publish-4505, jar\n",
        "cq5-publish-4503, jar\n",
        "cq5-publish_4503, jar\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Which property is deprecated while resolving a template (T) that can be used as a template forpage (P)?\n",
      "options": [
        "cq:allowedTemplates property of the jcr:contentsubnode of P or an ancestor of P\n",
        "allowedPaths property of T\n",
        "allowedParents property of T\n",
        "allowedChildren property of the template of P\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "Assume there are multiple publish instances (publ,pub2 and pub3) serving requests for an onlineshopping site. The end user is allowed to provide reviews and comments for each product andabout their shopping experience. The Dispatcher module is in place to load balance the requeststo publish instances and there is only one author instance, named author, where content editorscreate the pages. When a user, named User A, provides comments and the request being servedby publish Instance publ, in which three ways are these comments replicated to pub2 and pub3?(Choose three.)\n",
      "options": [
        "Configure the dispatcher flush for the author pointing to a webserver uri on which the Dispatcheris deployed and configured.\n",
        "Configure replication agents for the author pointing to publ, pub2 and pub3.\n",
        "Configure reverse replication agents for the author pointing to publ, pub2 and pub3.\n",
        "Configure a static agent for the author.\n"
      ],
      "answers": [
        "A",
        "C",
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Which template allowed Paths expression would allow a page to be created with the path/ content/ main / page1/ page2?\n",
      "options": [
        "/content/main/?\n",
        "/content/main/[^/]+(/,*)?\n",
        "/content/main/[A/]+[A/]\n",
        "/content/main/*\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "You want to invert the order of display of components added to parsys provided out of the box.Recently added components always have to display on top.\nWhile implementing the new parsyscomponent, which two options are valid? (Choose two).\n",
      "options": [
        "Copy the parsys component and all its contents from /libs/foundation/components/parsys to /apps/foundation/components/parsys and modify the applicable JSPs.\n",
        "Copy the only applicable parsys component JSPs from /libs/foundation/components/parsys to /apps/foundation/components/parsys and modify them.\n",
        "Create a new parsys component under/apps/<projectid>/components/content/myparsys and apply the property sling:resourceSuperType=foundation/components/parsy$, modify the JSP as applicable,\n",
        "Create a new parsys component from scratch.\n"
      ],
      "answers": [
        "B",
        "C"
      ],
      "docs": ""
    },
    {
      "title": "You are logged in as userA and you are impersonating userB.\nHow are your activities logged inthe access.log?\n",
      "options": [
        "The logged userld is \"userB impersonated by userA\"\n",
        "The logged userld is \"userA on behalf of userB\"\n",
        "The logged userld is \"userB\"\n",
        "The logged userld is \"userA\"\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which OSGI bundle should be disabled to restrict web-based log viewing?\n",
      "options": [
        "Adobe CRXDE Support (com.day.crx.crxde-support)\n",
        "Apache Sling OSGiLogService Implementation (org.apache.sling.commons.logservi\n",
        "Granite Requests Logging (com.adobe.granite.requests.logging)\n",
        "Day Commons Library - Input/OutputSupport (day-commons-io)\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "Which Maven plugin allows direct installation of the bundle into AEM?\n",
      "options": [
        "maven-sling-plugin\n",
        "maven-scr-plugin\n",
        "maven-bundle-plugin\n",
        "maven-javadoc-plugin\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "When installing Internet Information Services, which Application Development Feature needs to beenabled to work with the AEM Dispatcher?\n",
      "options": [
        "ISAPI Filters\n",
        "Server-Side Includes\n",
        "CGI\n",
        "ISAPI Extensions\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Which should be configured to create a custom log file with a different log level?\n",
      "options": [
        "Apache Sling Log Configuration\n",
        "Apache Sling Logging Reader Configuration\n",
        "Apache Sling Logging Logger Configuration\n",
        "Apache Sling Logging Configuration\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which is a valid out-of-the-box sling run mode?\n",
      "options": [
        "activate\n",
        "production\n",
        "loadsamplecontent\n",
        "nosamplecontent\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Which command would you enter in your CQ Component script to get the template path of an AEM page in publish instance?\n",
      "options": [
        ". Properties-get(\"cq:temp|ate\"/-);\n",
        "Page.getTemplate();\n",
        "Page.getTemplate().getPath();\n",
        "resource.getTemplate.getPath();\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "The same OSGI configuration parameter is present under /libs/*/config.. AND /apps/*/config..andmodified in both locations as well as via felix Console.\nDuring runtime, what is the reload order?\n",
      "options": [
        "/libs/*/config, Felix Console and /apps/*/config\n",
        "Felix Console,/apps/*/config and /llbs/*/config\n",
        "/llbs/*/config, /apps/*/config and Felix Console\n",
        "/apps/*/config, /libs/*/config and Felix Console\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "How do you delete a property inside a Node object?\n",
      "options": [
        "node.setProperty(npropertyName\",\"\");\n",
        "node.setProperty(\"propertyName\",null);\n",
        "node.delete(\"propertyName\");\n",
        "node.removeProperty(\"propertyName\");\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "When configuring a custom log file on a production publish instance, which two statements aretrue? (Choose two).\n",
      "options": [
        "Web Console url http://<aemhost>:<port>/system/console/slinglog provides information about Sling Logging.\n",
        "lways start with the log level DEBUG on the production server to get more information.\n",
        "Create a run mode based on Apache Sling Logging Logger configuration for publish run mode as org.apache.sling.commons.log.LogManager.factory.config-<identlfier>.\n",
        "The physical location of the custom log file is NOT relative to the crx-quickstart folder.\n"
      ],
      "answers": [
        "A",
        "C"
      ],
      "docs": ""
    },
    {
      "title": "What does the vlt command 'resolve' do?\n",
      "options": [
        "Removes the conflict markers.\n",
        "Semantically resolves conflicts.\n",
        "Removes the conflict-related artifact files.\n",
        "Allows the path to be committed with the conflicts.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "You add \"sling.run.modes=publish/f in sling.properties and start the instance using the command\"java -jar aem-6-p4502.jar -r author\".\nIn which mode will the instance start?\n",
      "options": [
        "Both author and publish.\n",
        "Author\n",
        "Publish\n",
        "Due to conflict in the run modes, AEM will not start\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which three best practice statements are true regarding permissions and privileges? (Choose three).\n",
      "options": [
        "Access rights should not be assigned on a user-by-user basis.\n",
        "Use deny statements to specify the access rights of a group of users.\n",
        "After installation, update the passwords for the default users to prevent security breaches.\n",
        "Use a test installation to ensure correct relationships between Users and Groups,\n"
      ],
      "answers": [
        "A",
        "C",
        "D"
      ],
      "docs": ""
    },
    {
      "title": "What is the optimal way to check-out content from the JCR repository to the local file system?\n",
      "options": [
        "Use VLT export command.\n",
        "Create and build a package using CQ Package manager. Download and unzip the package in the local file system.\n",
        "Use VLT import command.\n",
        "Download content from the repository as an XML file.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "An author and publish instance has a shared data store with a very large number of assets. Whichtype of replication is recommended to avoid duplication of data?\n",
      "options": [
        "Asynchronous replication.\n",
        "Binaryless replication.\n",
        "ClusterDataStore with no replication agents.\n",
        ". Replication with no versioning.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "Which two URLs will show the server logs? (Choose two.)\n",
      "options": [
        "http://{server}/system/console/status-slinglogs\n",
        "http://{server}/system/console/slinglog\n",
        "http://{server}/bin/crxde/logs\n",
        "http://{server}/system/console/logs\n"
      ],
      "answers": [
        "A",
        "B"
      ],
      "docs": ""
    },
    {
      "title": "The default installation location for AEM 6.0 in an Application Server is ${user.dfr}/crx-quickstart. Which method is used to change this location?\n",
      "options": [
        "Configure the sling.home parameter in the WEB-INF/web.xml file of the AEM WAR file after deployment.\n",
        "Configure the sling.home parameter in the WEB-INF/web.xml file of the AEM WAR file before deployment.\n",
        "Configure the sling.run.modes parameter in the WEB-INF/web.xml file of the AEM WAR file after deployment,\n",
        "Configure the sling.run.modes parameter in the WEB-INF/web.xml file of the AEM WAR file before deployment\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "Which three statements are true when an AEM author instance is started in debug mode? (Choose three.)\n",
      "options": [
        "When AEM starts in debug mode, it does not force JVM to fork a separate process.\n",
        "AEMstarts with -Xdebug option (e.g;java -Xdebug -Xnoagent -Djava.compiler=NONE Xmnjdwp:transport=dt_socket,server=y,suspend=n/address=30303–jaraem6~autbor-p4502).\n",
        "AEM starts with an option -debug (e.g; Java -jaraem6-author-p4502 -debug 30303) from command line\n",
        "When AEM starts in debug mode, it forces JVM to fork a process.\n"
      ],
      "answers": [
        "B",
        "C",
        "D"
      ],
      "docs": ""
    },
    {
      "title": "How can a JSP be included in a sightly template?\n",
      "options": [
        "<cq:include script=\" Include.jsp7>\n",
        "<div data-sly-include=\"include.jsp\"></div>\n",
        "<div data-sly-use=\"include.jsp\"></div>\n",
        "<%@ include file=\"1nclude.jsp\" %>\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "You want to restrict the size of a custom log file and enable log file rotation. Which Apache Sling configuration has to be changed in the AEM Web Console?\n",
      "options": [
        "Apache Sling Composite Health Check\n",
        "Apache Sling Job Manager\n",
        "Apache Sling Logging Writer Configuration\n",
        "Apache Sling Logging Logger Configuration\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "You are creating a new OSGi configuration in the repository. When are the configuration changesapplied?\n",
      "options": [
        "By stopping and starting the bundle that refer the service,\n",
        "Changes are applied as soon as the node is updated by restarting the service.\n",
        "After restarting the CQ instance.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which log file in <cq-installation-dir>/crx-quickstrat/logs should you look at to see logging messages indicating events during startup?\n",
      "options": [
        "Audit.log\n",
        "Error.log\n",
        "Stdout.log\n",
        "Stderr.log\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Where are ACL node permissions for a node stored in the JCR?\n",
      "options": [
        "They are stored as ACL permission in the groups under /home/groups\n",
        "They are stored as ACL permissions in the user node under/home/users\n",
        "They are stored as rep:policy node under the same node\n",
        "They are stored inside the template node under/etc/designs\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "You create an nt:unstructured node inside the apps in CRXDE Lite and then you create a folder inside the apps and click save. What is the expected behavior?\n",
      "options": [
        "The folder and nt:unstructured node, none of them will get saved.\n",
        "The folder will get saved after refreshing the apps.\n",
        "The folder and nt:unstructured node, both will get saved.\n",
        "The folder will get saved.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which three statements about configuring a development environment for a new AEM project called \"customer bank\", that contains both custom OSGi services and AEM components is true? (Choose three).\n",
      "options": [
        "http://<aemhost>:<aemport>/system/console/depfinderls used to find the dependencies\n",
        "The repository for AEM dependency jar files can be either http://repo.adobe.com/nexus/content/groups/public/ or the local Apache Archiva with all required dependencies\n",
        "Create a Maven project with archtypemultimodule-content-package-archetype from the repository http://repo.adobe.com/nexus/content/groups/public/\n",
        "Create a Maven project with archtype simple-content-package-archetype from repository http://repo.adobe.com/nexu5/content/gmups/public/\n"
      ],
      "answers": [
        "B",
        "C",
        "D"
      ],
      "docs": ""
    },
    {
      "title": "What is the difference between extending a component and component overlay?\n",
      "options": [
        "There is NO difference.\n",
        "Overlay is to override default component functionality. Extending is to extend the component functionality through the use of Resource Hierarchy and super types.\n",
        "Overlay is to extend the component functionality through the use of Resource Hierarchy and super types. Extending is to override default component functionality.\n",
        "Extending component means extending the behavior of foundation component, Overlay component is overriding the behavior of custom component.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "Which has the highest preference during Sling Servlet registration?\n",
      "options": [
        "sling.servlet.paths\n",
        "sling.servlet.resourceTypes\n",
        "sllng.servlet.extension\n",
        "sling.servlet.selectors\n"
      ],
      "answers": [
        "A"
      ],
      "docs": ""
    },
    {
      "title": "Which three AEM jar names will start AEM in author mode? (Choose three.)\n",
      "options": [
        "quickstart-4502.jar\n",
        "cq5-author-p4502.jar\n",
        "aem-publish.jar\n",
        "cq5-author-4502.jar\n"
      ],
      "answers": [
        "A",
        "B",
        "D"
      ],
      "docs": ""
    },
    {
      "title": "While modifying an OSGi bundle configuration from the Felix Web Console, when are configuration changes applied?\n",
      "options": [
        "After restarting the CQ instance,\n",
        "After restarting the bundle.\n",
        "After restarting the service.\n",
        "Immediately as it takes precedence at runtime.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Which statement about client libraries is true?\n",
      "options": [
        "A client library node type has the jcr:primaryType value nt:folder\n",
        "The clientlibrary for a project called myappshould be defined under /etc/clientlibs/myapp\n",
        "To include only CSS files In the header.jsp from the client lib called \"myproject.all\" use <cqincludeClientLib categories=\"myproject all\"/>\n",
        "Use the Day CQ HTML Library Manager service in the Felix console to compress and minify the generated CSS for better performance on production systems.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "Which statement regarding an AEM instance started with author run-mode is correct?\n",
      "options": [
        "Author run-mode CANNOT be used to preview a website,\n",
        "The side-kick does NOT appear in the author mode,\n",
        "The run-mode can be changed to publish after installation,\n",
        "The run-mode CANNOT be changed to publish after installation.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "What is the correct way to use clientlibs with Sightly?\n",
      "options": [
        "<meta data-sly-template=\"${clientLib.all@ categories=,your.cllentlib,}\"data-sly-unwrap></meta>\n",
        "<meta data-sly-call=\"${clientLib.all @ categories-,your.clientlib,}M data-sly-unwrap></meta>\n",
        "<meta data-sly-use-\"${clientLib.all @ categorfes^'your.clientlib'}\" data-sly-unwrap></meta>\n",
        "<meta data-sly-include=n${clientLib.all @ categories='your.cllentlib'}\" data-sly-unwrap></meta>\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "You are using IIS as the Web server with the dispatcher and your websites root folder path is /content/mycompany. The page /content/mycompany/about us is edited and activated to the AEM publish instance. Assuming the dispatcher flush agent is NOT available and IIS is installed on C:inetpub of the Windows server, what needs to done for the new version of the page to be seen from the IIS Web server?\n",
      "options": [
        "Delete the subfolders of the directory \"C:inetpubwwwroot\" to dear the content cache.\n",
        "Delete the directory \"C:inetpub\tempn to clear the content cache.\n",
        "Delete the following directory \"C:inetpubwwwrootcontentmycompany\" to clear the content cache.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": ""
    },
    {
      "title": "Which is avalid way of creating an OSGI service?\n",
      "options": [
        "class MyServiceImpl extends ServiceRegistry { } \n",
        "Service classMyServiceImpl extends MyService } \n",
        "©Component ©Service class MyServiceImpl extends MyService \n",
        "/** * * */ classMyServiceImpI extends MyService { \n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Using the default Dispatcher configuration, which type of URL will have a response cached by the Dispatcher?\n",
      "options": [
        "URL denied by the /cache sections in dispatcher.any file.\n",
        "URL without a file extension.\n",
        "URL with query parameters.\n",
        "URL with an extension in its suffix.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "How does AEM provide the page model to a Single Page Application (SPA)\n",
      "options": [
        "The SPA requests the HTML from AEM usimg HTL or JSP\n",
        "The SPA requests the structure through the DOM\n",
        "The SPA requests the page model from the Content Services.\n",
        "The SPA page model is provided in client libraries.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "What would be a good use-case for using AEM to edit your Single Page Application (SPA)?\n",
      "options": [
        "Allows you to deploy the SPA\n",
        "Deploy the SPA on native devices\n",
        "Avoids the service of a front-end developer\n",
        "Adds the capability for authors to interact with the SPA content\n"
      ],
      "answers": [
        "D"
      ],
      "docs": ""
    },
    {
      "title": "A client has asked to share an HTML version of test coverage report for the AEM project.\nWhat plugin should the AEM developer use to generate test coverage report using latest archetype?\n",
      "options": [
        "<plugin><groupId>org.codehaus.mojo</groupId><artifactId>selenium-maven-plugin</artifactId>....</plugin>\n",
        "<plugin><groupId>org.apache.maven.plugins</groupId><artifactId>maven-surefire-plugin</artifactId>....</plugin>\n",
        "<plugin><groupId>org.apache.maven.plugins</groupId><artifactId>maven-checkstyle-plugin</artifactId>....</plugin>\n",
        "<plugin><groupId>org.apache.maven.plugins</groupId><artifactId>maven-pmd-plugin</artifactId>....</plugin>\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://dzone.com/articles/reporting-code-coverage-using-maven-and-jacoco-plu"
    },
    {
      "title": "AEM supports Traditional, Headless and Hybrid delivery capabilities in various ways.\nWhich of the following are the tools enabling Omnichannel experience capability in AEM?\n",
      "options": [
        "1. Sling Model Exporter for Content Fragments and Experience Fragments\n2. AEM Assets HTTP API\n3. Content Services\n",
        "1. Sling Model Exporter for Content Fragments and Experience Fragments\n2. AEM Assets HTTP API\n3. GraphsQL API for Content Fragments and Experience Fragments\n",
        "1. AEM Assets HTTP API\n2. GraphsQL API for Content Fragments and Experience Fragments\n3. Content Services\n",
        "1. Sling Model Exporter for Content Fragments and Experience Fragments\n2. GraphsQL API for Content Fragments and Experience Fragments\n3. Content Services\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://medium.com/adobetech/headless-commerce-content-management-with-aem-i-o-runtime-87c315283b74"
    },
    {
      "title": "A developed has multiple LDAP Authentication providers. The user is not required to pass the authentication test of the Authentication provider.\n- If authentication succeeds, control is returned to the caller; no subsequent Authentication provider down the list is executed.\n- If authentication fails, authentication continues down the list of providers.\nWhat should be the JAAS Control flag value in Apache Jackrabbit Oak External Login Module configuration?\n",
      "options": [
        "OPTIONAL\n",
        "SUFFICIENT\n",
        "REQUIRED\n",
        "MANDATORY\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://docs.oracle.com/javase/8/docs/api/javax/security/auth/login/Configuration.html"
    },
    {
      "title": "A project requires sharing information between SPA components.\nWhat is the least complex approach to achieve that objective?\n",
      "options": [
        "Implement a state library in order to share component states.\n",
        "Centralize the logic and broadcast to the necessary components.\n",
        "Utilize model props to drill down and access or set the state on desired components.\n",
        "Customize and extend the container component to leverage the object hierarchy.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/developing/headless/spas/spa-getting-started-react.html?lang=en#sharing-information-between-spa-components"
    },
    {
      "title": "An AEM Developer creates a custom OAK Lucene index for /content/mywebsite under /oak:index node. While testing the live site, it is found that the index is not being applied to any query within the website. Default Lucene indexes with high cost are being picked up by the AEM.\nWhat is the most likely cause of this issue?\n",
      "options": [
        "The custom OAK Lucene index is missing evaluatePathRestrictions property and queryPaths property.\n",
        "The custom OAK Lucene index must be replaced with OAK Lucene Property index.\n",
        "The custom OAK Lucene index is missing evaluatePathRestrictions property and includedPaths property.\n",
        "The custom OAK Lucene index must include boost property to rank it higher than default Lucene index.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/practices/best-practices-for-queries-and-indexing.html?lang=en"
    },
    {
      "title": "An AEM application is required to create absolute urls for the web domain on which the application is supposed to run. The developer wants to create the absolute urls in the server to facilitate other use cases for SEO and Analytics.\nWhich of the following options would work for the developer?\n",
      "options": [
        "Configure Day CQ Link Externalizer to remove the author domain.\n",
        "Configure Day CQ Link Externalizer to add a domain mapping to Author Server and Publish the page.\n",
        "Configure Day CQ Link Externalizer to add a domain mapping to Publisher/Web Server.\n",
        "Configure apache rewrite rules to create the absolute urls.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/externalizer.html?lang=en#using-the-externalizer-service"
    },
    {
      "title": "A developer has a requirement to add a new custom tab to the page properties of a specific page. The sling:resourceType of that page is \"foo/components/page\" and the sling:resourceSuperType of that page is \"core/wcm/components/page/v2/page\".\nWhat is the best approach?\n",
      "options": [
        "1. Copy the cq:dialog from app/core/wcm/components/page/v2/page to app/foo/components/page\n2. Remove all the tabs\n3. Add the custom tab\n",
        "1. Identify the location of the cq:dialog node from app/core/wcm/components/page/v2/page\n2. Identify the last entry of the items node\n3. Add the custom tab after that node\n",
        "1. Copy the cq:dialog from app/core/wcm/components/page/v2/page to app/foo/components/page\n2. Identify the last entry of the items node\n3. Add the custom tab after that node\n",
        "1. Create a new cq:dialog node under app/foo/components/page\n2. Add the nodes cq:dialog > content > items\n3. Add the custom tab in this node\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://helpx.adobe.com/experience-manager/kt/sites/using/page-properties-technical-video-develop/6-3-page-properties-technical-video-develop.html "
    },
    {
      "title": "A custom AEM application contains Bundle A and Bundle B. Bundle A has a dependency to Bundle B via Import-Package.\nHow can both bundles be deployed most efficiently accross all environments?\n",
      "options": [
        "Embed both bundles in one content package and use property 'installationOrder' in package properties for correct bundle installation order\n",
        "Create one content package per bundle and use a package dependency to ensure installation order\n",
        "Use the Felix Web Console to upload the bundles in the correct order\n",
        "Embed both bundles in one content package; the dependency via Import-Package is enough to ensure correct installation\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://stackoverflow.com/questions/32455624/order-of-deployment-of-bundles "
    },
    {
      "title": "An AEM Developer is setting up a new AEM project for a custom SPA that will utilize the SPA Editor.\nWhich command should the developer use?\n",
      "options": [
        "mvn -B archetype:generate   -D archetypeGroupId=com.adobe.granite.archetypes   -D archetypeArtifactId=aem-project-arquetype   -D archetypeVersion=23   -D frontendModule=angular\n",
        "mvn -B archetype:generate   -D archetypeGroupId=com.adobe.granite.archetypes   -D archetypeArtifactId=aem-project-arquetype   -D archetypeVersion=23   -D frontendModule=general\n",
        "mvn -B archetype:generate   -D archetypeGroupId=com.adobe.granite.archetypes   -D archetypeArtifactId=aem-project-arquetype   -D archetypeVersion=23   -D frontendModule=react\n",
        "mvn -B archetype:generate   -D archetypeGroupId=com.adobe.granite.archetypes   -D archetypeArtifactId=aem-project-arquetype   -D archetypeVersion=23   -D sdkVersion=latest\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-core-components/using/developing/archetype/overview.html?lang=en"
    },
    {
      "title": "An AEM application must be highly available and scalable in distributed geographical scenario.\nWhich approach should be used to meet the requirements?\n",
      "options": [
        "TarMK Cold Standby\n",
        "TarMK Farm\n",
        "Oak Cluster with MongoMK Failover Across Multiple Datacenters\n",
        "Oak Cluster with MongoMK Failover in a Single Datacenter\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/recommended-deploys.html?lang=en"
    },
    {
      "title": "An AEM Developer needs to remove the pretitle option from within the Core Teaser component´s dialog.\nThey start by:\n1. Creating a component with the Core Teaser component as its resourceSuperType\n2. Adding a _cq_dialog folder under the component\nWhere are the next correct steps that the AEM Developer needs to take?\n",
      "options": [
        "1. Navigate to /apps/core/wcm/components/teaser/v1/teaser/cq:dialog/content/items/tabs/items/text/items/columns/items/column/items in CRX.\n2. Delete the pretitle child node.\n",
        "1. Create a file named .content.xml inside that new folder.\n2. Copy only the node structure that will be modified into .content.xml.\n3. Add sling:hideChildren[pretitle] to the parent node of the pretitle node.\n",
        "1. Create a file named dialog.xml inside that new folder.\n2. Copy the entire node structure from the Core Teaser component´s dialog.xml.\n3. Delete the pretitle node.\n",
        "1. Navigate to the new components dialog in CRX.\n2. Delete the pretitle child node.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/developing/components/hide-conditions.html?lang=en "
    },
    {
      "title": "What is Out of Scope for the Pattern Detector Tool, while doing an AEM upgrade?\n",
      "options": [
        "rep:User nodes compatibility (in context of OAuth configuration)\n",
        "Backward Compatibility with the previous AEM Version\n",
        "OSGI bundles exports and imports mismatch\n",
        "Definitions of Oak indices for compatibility\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/deploying/upgrading/pattern-detector.html?lang=en"
    },
    {
      "title": "An AEM application wants to set up multi-tenancy using Adobe-recommended best practices and bind multiple configurations to it.\nWhich of the following options is recommended?\n",
      "options": [
        "import org.osgi.service.metatype.annotations.AttributeDefinition;\nimport org.osgi.service.metatype.annotations.ObjectClassDefinition;\n@ObjectClassDefinition(name = \"My configuration\")\n",
        "import org.osgi.service.metatype.annotations.Component;\nimport org.osgi.service.metatype.annotations.Designate;\n@Component(service = ConfigurationFactory.class)\n@Designate(ocd = ConfigurationFactoryImpl.Config.class, factory = true)\n",
        "import org.apache.felix.src.annotations.Component;\n@Component(label = \"My configuration\", metatype = true, factory = true)\n",
        "import org.osgi.service.metatype.annotations.Component;\n@Component(service = ConfigurationFactory.class)\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://sourcedcode.com/blog/aem/how-to-enable-configuration-for-osgi-components-with-r6"
    },
    {
      "title": "Which option should be used to synchronize user data across publish servers in a publish farm?\n",
      "options": [
        "Using Vault plugin\n",
        "Replication Agents\n",
        "Using CURL\n",
        "Using Sling Distribution\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/sync.html?lang=en"
    },
    {
      "title": "An AEM application must implement user testing using AEM Mocks.\nWhich two services does the Class AemContext provide developers access to? (Choose two).\n",
      "options": [
        "FlushAgent\n",
        "Session\n",
        "TagManager\n",
        "WorkflowSession\n",
        "ModelFactory\n"
      ],
      "answers": [
        "C",
        "E"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/unit-testing.html?lang=en"
    },
    {
      "title": "A customer adds third-party client libraries to add some features in an existing AEM application, which will significantly reduce performance.\nWhat is the best option for the AEM Developed to optimize the site?\n",
      "options": [
        "Rebuild Client libraries\n",
        "Debug third-party client lib and fix the code\n",
        "Embed client libraries to consolidate them into fewer files\n",
        "Create new AEM application from Scartch\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://helpx.adobe.com/experience-manager/kb/optimize-aem-site-performance.html "
    },
    {
      "title": "While doing an In-Place AEM upgrade, the developer observes an issue in the server logs where all are active except for the ACS Commons bundle which is incompatible due to old version.\nWhat should the developer to do resolve this issue?\n",
      "options": [
        "Ask for admin credential & install the new bundle in Felix console\n",
        "Update the plugin in pom.xml\n",
        "Drop the new package under path crx-quickstart/install and restart\n",
        "Install the new jar using the package manager on the old environment\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/upgrading/pre-upgrade-maintenance-tasks.html?lang=en#remove-updates-install-directory "
    },
    {
      "title": "Per the latest AEM archetype, what are two primary purposes of the it.launcher module? (choose two)\n",
      "options": [
        "Package up Junit tests that will later be executed server-slide\n",
        "Bundle up the code that deploys ui.test to the server\n",
        "Hold all mock data user for Junit testing\n",
        "Trigger remote Junit execution.\n",
        "Bundle all Hobbes tests for automating UI test.\n"
      ],
      "answers": [
        "B",
        "D"
      ],
      "docs": "https://github.com/styladev/adobeExperienceManagerStylaPlugin "
    },
    {
      "title": "An AEM Developer needs to automate test for the user interface.\nWhich tool is provided in the AEM framework for automated UI testing?\n",
      "options": [
        "Jasmine\n",
        "HobbesJS\n",
        "Sinon\n",
        "Mocha\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/components/hobbes.html?lang=en#components "
    },
    {
      "title": "An AEM application requires a service user WRITE access to children nodes but not on the parent node itself.\nWhich console should the developer use to apply appropiate ACL?\n",
      "options": [
        "User Management console\n",
        "Group Management console\n",
        "OAuth Clients console\n",
        "Permmissions console\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/security.html?lang=en#managing-users-and-groups "
    },
    {
      "title": "Which configuration takes precedence at runtime, when multiple configurations exist in AEM?\n",
      "options": [
        "Any .config file from <cq-installation-dir>/crq-quickstart/launchpad/config/... . on the local file system\n",
        "Repository nodes with type sling:OsgiConfig under /libs/*/config...\n",
        "Configurations that exist in the Web Console\n",
        "Repository nodes under /apps/*/config...\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/configuring-osgi.html?lang=en#configuration-details "
    },
    {
      "title": "An AEM Developer receives requirements for Sling Models in a human-readable yaml format. A custom application needs to be built. The dependency is as show:\n<dependency>\n\t<groupId>com.fasterxml.jackson.core</groupId>\n\t<artifactId>jackson-databind</artifactId>\n\t<version>2.8.4</version>\n\t<scope>provided</scope>\n</dependency>\n<dependency>\n\t<groupId>com.fasterxml.jackson.dataformat</groupId>\n\t<artifactId>jackson-dataformat-yaml</artifactId>\n\t<version>2.8.4</version>\n\t<scope>provided</scope>\n</dependency>\nAfter implementing ModelExporter, which method should be used to meet this requirement?\n",
      "options": [
        "1. Create OSGI models to export as yalm\n2. Configure mime type in Apache Sling MIME Type Service\n",
        "1. Create Sling models to export as yaml\n2. Configure mime type in Apache Sling MIME Type Service\n",
        "1. Create OSGI models to export as yaml\n2. Configure mime type in Apache Sling Servlet/Script Resolver and Error Handler\n",
        "1. Create Sling models to export as yaml\n2. Configure mime type in Apache Sling Referrer Filter\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://taradevko.com/aem/sling-model-exporter-now-really-custom/"
    },
    {
      "title": "An AEM application requieres LDAP Service integration to synchonize user/group\nWhich two OSGI configuration are required for LDAP integration in AEM? (Choose Two)\n",
      "options": [
        "Apache Jackrabbit Oak External Login Module\n",
        "Apache Jackrabbit oak Solr server provider\n",
        "Apache Jackrabbit Oak Default Sync Handler\n",
        "Apache Jackrabbit Oak CUG Configuration\n",
        "Apache Jackrabbit Oak Authorizable-ActionProvider\n"
      ],
      "answers": [
        "A",
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/ldap-config.html?lang=en#configuring-the-ldap-identity-provider"
    },
    {
      "title": "Which URI should be used to configure a Flush Agent for a dispatcher listening on port 8080?\n",
      "options": [
        "http://<dispacherHost>:8080/cache.invalidate\n",
        "http://<dispacherHost>:8080/dispatcher/cache.invalidate\n",
        "http://<dispacherHost>:8080/invalidate.cache\n",
        "http://<dispacherHost>:8080/disptcaher/cache.invalidate\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/page-invalidate.html?lang=en#setting-up-aem-user-accounts "
    },
    {
      "title": "AEM SPA´s PageModelManager leverages the JSON Model Exporter.\nWhich two meta fields are exposed through that exporter? (Choose Two))\n",
      "options": [
        ":parent\n",
        ":length\n",
        ":children\n",
        ":resource\n",
        ":type\n"
      ],
      "answers": [
        "C",
        "E"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/developing/headless/spas/spa-blueprint.html?lang=en#general-concepts "
    },
    {
      "title": "An AEM Developer needs to create a log file for the project.\nWhich next step should the developer take?\n",
      "options": [
        "Create a log file under /var/system/configuration... specific runmode folder(s).\n",
        "Create a log file under /apps/system/configuration... specific runmode folder(s).\n",
        "Create a log file under /apps/myproject/configuration... specific runmode folder(s).\n",
        "Ask AMS/DevOps for admin access to create a log file via console\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://helpx.adobe.com/experience-manager/using/custom_log_file.html "
    },
    {
      "title": "A developer creates two classes. ClassA has the following code:\npackage com.aem.abc;\nimport org.slf4.Logger:\nimport org slf4.LoggerFactory;\npublic class ClassA{\nprivate static final Logger logger = LoggerFactory.getLogger(this.getClass());\n   public void classAMethod() {\n       logger.debug(\"Message from Class A method\");\n    }\n}  \nThe developer creates a custom log custom.log with debug level in OSGI sling log support for the Java package com.aem.abc. The developer adds another class ClassB with the following code:\npackage com.aem.xyz;\nimport org.slf4.Logger:\nimport org slf4.LoggerFactory;\npublic class ClassB{\nprivate static final Logger logger = LoggerFactory.getLogger(this.getClass());\n   public void classBMethod() {\n       logger.debug(\"Message from Class B method\");\n    }\n}  \nWhich action must the developer take to see the log messages in the same file from both classes?\n",
      "options": [
        "Configure custom.log in the OSGI web console --> Sling --> Log Support and replace logger com.aem.abc with com.aem\n",
        "Configure custom.log in  OSGI web console --> Sling --> Log Support and replace logger com.aem.xyz with com.aem.abc\n",
        "Configure custom.log in the OSGI web console --> Sling --> Log Support and replace the package com.aem.abc  with com.aem.xyz\n",
        "Create separate a log file in the OSGI web console --> Sling --> Log Support for logger com.aem.xyz\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://helpx.adobe.com/experience-manager/using/custom_log_file.html"
    },
    {
      "title": "Which solution should be used to synchronize user permissions across AEM servers?\n",
      "options": [
        "ACS Commons ACL Packager\n",
        "Maven Vault plugin\n",
        "User Sync tool\n",
        "ACS Commons Authorizable Packager\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/sync.html?lang=en#introduction "
    },
    {
      "title": "The OSGI configuration is added to a runmode specific configuration \"config.author.staging\" in AEM as a Cloud Service. The application fails to read the configuration.\nWhat is a possible cause of this issue?\n",
      "options": [
        "AEM as a Cloud service does not support ORGI configuration runmodes.\n",
        "The custom OSGI configuration runmode used (i.e., \"config.author.staging\") is not supported in AEM as a Cloud service.\n",
        "OSGI configuration runmodes cannot be installed automatically on AEM as a Cloud Service. We need to install them as a package using the Package manager.\n",
        "Only <service> specific OSGI configuration runmodes like \"config.author\" os \"config.publish\" are supported in AEM as a Cloud service.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/deploying/configuring-osgi.html?lang=en#runmode-resolution"
    },
    {
      "title": "Which configuration/section should be used to resolver the domain name by dispatcher?\n",
      "options": [
        "Configuration in httpd.conf\n",
        "Configuration in filters.any\n",
        "Configuration in DNS\n",
        "Configuration in vhost file\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-domains.html?lang=en#define-virtual-hosts-on-the-web-server"
    },
    {
      "title": "Where should an AEM Developer add a frond end dependency?\n",
      "options": [
        "settings-xml\n",
        "config.json\n",
        "vault.xml\n",
        "package.json\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/spa-angular-tutorial/integrate-spa.html?lang=es#agregar-estilos-con-sass"
    },
    {
      "title": "SPA components are connected to AEM componentes via the MapTo() method. Which code should be used to correctly connect an SPA component called ItemList to its AEM equivalent?\n",
      "options": [
        "MapTo (ItemList) (‘project/components/content/itemList’,ItemListEditConfig);\n",
        "MapTo (‘project/components/content/itemList’,ItemListEditConfig);\n",
        "ItemList.MapTo(‘proyect/components/content/itemList’);\n",
        "(‘project/components/content/itemList’).MapTo(ItemList, ItemListEditConfig);\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/spa-angular-tutorial/map-components.html%3Flang%3Dko#create-the-image-component"
    },
    {
      "title": "Which tool allows assets to be shared with multiple AEM instances as read-only local assets?\n",
      "options": [
        "Package Manager\n",
        "Felix Console\n",
        "Connected Assets\n",
        "Asset Link Share\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/assets/using/use-assets-across-connected-assets-instances.html?lang=en#using"
    },
    {
      "title": "A developed needs to create sling models for two fields name and occupations. The dialog has two fields, name – a single value field, and occupations – a multi value field. \nThe following code is included in sling models inherited from interface com.adobe.aem.guides.wknd.core.models.Byline\npackage com.adobe.aem.guides.wknd.core.models.impl;\n……\npublic class BylineImpl implements Byline{\n   ……\n   @Override\n   public List <String> getOccupations(){\n       if (occupations!=null){\n          Collections.sort(occupations);\n          return new ArrayList<String> occupations;\n       }else{\n          return Collections.emptyList();\n      }\n   …..\n}\nWhich method should be used to represent this model in HTL?\n",
      "options": [
        "<div data-sly-use-byline=” com.adobe.aem.guides.wknd.core.models.Byline.impl”\ndata-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”\ndata-sly-test-hasContent=”${!byline.empty}” class=”cmp-byline”>\n<h2 class=”cmp-byline__name”>${byline.name}”</h2>\n<p class= cmp-byline__pccupations”>${byline.occupations @ join=’, ‘}</p>\n</div>\n",
        "<div data-sly-use-byline=” com.adobe.aem.guides.wknd.core.models.Byline”\ndata-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”\ndata-sly-test-hasContent=”${!byline.empty}” class=”cmp-byline”>\n<h2 class=”cmp-byline__name”>${byline.name}”</h2>\n<p class= cmp-byline__occupations”>${byline.occupations @ join=’, ‘}</p>\n</div>\n",
        "<div data-sly-use-byline=” com.adobe.aem.guides.wknd.core.models.Byline”\ndata-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”\ndata-sly-test-hasContent=”${!byline.empty}” class=”cmp-byline”>\n<h2 class=”cmp-byline__name”>${byline.name @ join=’, ‘}”</h2>\n<p class= cmp-byline__occupations”>${byline.occupations @ join=’, ‘}</p>\n</div>\n",
        "<div data-sly-use-byline=” com.adobe.aem.guides.wknd.core.models.Byline”\ndata-sly-use-placeholderTemplate=”core/wcm/components/commons/v1/templates.html”\ndata-sly-test-hasContent=”${!byline.empty}” class=”cmp-byline”>\n<h2 class=”cmp-byline__name”>${byline.name}”</h2>\n<p class= cmp-byline__occupations”>${byline.occupations }</p>\n</div>\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-htl/using/htl/expression-language.html?lang=en#array-join"
    },
    {
      "title": "A developer is using sling context-aware configuration trying to get the configuration resource using:\n@Reference\nPrivate ConfigurationResourceResolver cfgResourceResolver;\nconfResource = cfgResourceResolver.getResource(resource, BUCKET_NAME, CONFIG_NAME);\nThis Works as intended in autor and in publish when logged in to publish as admin. However this given a null when run as anonymous.\nWhich method is going to fix the issue?\n",
      "options": [
        "Applying read permissions to anonymous user for /etc directory.\n",
        "Applying read permissions to anonymous user for /config directory.\n",
        "Applying read permissions to anonymous user for /content directory.\n",
        "Applying write permissions to anonymous user for /config directory.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/configuring-osgi.html#osgi-configuration-in-the-repository"
    },
    {
      "title": "A developer needs to make template T avaliable as a child page of page P. The developer has determined that:\n- Template T matches cq:allowedTemplates property on page P.\n- Template T has no allowedPaths property set.\n- Template T is not in the same application as page P.\n- The template of page P has no match on the allowedParents property of template T.\n- Template T has no match on the allowedTemplates property on the template of page P.\nWhat should the developer change?\n",
      "options": [
        "Make page P match allowedPaths property of template T.\n",
        "Make the allowedParents property of template T match the template of page P.\n",
        "Migrate template T to the same aplicación as page P.\n",
        "Clear the allowedParents property of template T.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/templates/templates.html?lang=en#templates-content-fragments "
    },
    {
      "title": "An AEM appication must process a high volumen of content ingestion on the author server.\nWhat is a key factor to optimize a design for overall performance gain for implementing workflows?\n",
      "options": [
        "Use Transient workflows\n",
        "Allocate more RAM for the content ingestión up front.\n",
        "Run garbage collection every time content ingestión occurs.\n",
        "Use schedulers to run the workflows only on weeked\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/assets/administer/performance-tuning-guidelines.html?lang=en#workflows"
    },
    {
      "title": "A developer is having trouble trying to include a new embeddable into the Embed core component.\n- The Developed is using the versión 1 Embed component from WCM Core components.\n- The Developed sees the new embeddable component as a normal component that can be added to the page, which is incorrect.\n- The Developed does not see the new embeddable component as an option in the Embed component.\nWhich approach should be used to define the new component?\n",
      "options": [
        "<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr:title=”Foo” sling:resourceSuperType=”core/wcm/components/embed/v1/embed/embeddable” componentGroup=” embeddable”/>\n",
        "<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr:title=”Foo” sling:resourceType=”core/wcm/components/embed/v1/embed” componentGroup=” .hidden”/>\n",
        "<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr:title=”Foo” sling:resourceType=”core/wcm/components/embed/v1/embed/embeddable” componentGroup=” embeddable”/>\n",
        "<jcr:root xmlns:sling=http://sling.apache.org/jcr/sling/1.0 xmlns:jcr=http://www.jcp.org/jrc/1.0 jcr:primaryType=”cq:Component” jcr:title=”Foo” sling:resourceSuperType=”core/wcm/components/embed/v1/embed/embeddable” componentGroup=” .hidden”/>\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://github.com/adobe/aem-core-wcm-components/tree/master/content/src/content/jcr_root/apps/core/wcm/components/embed/v1/embed#extending-the-embed-component"
    },
    {
      "title": "A customer needs to store approximately 200 raw data items from REST API and display each item as an AEM Page. A draft page template exists. \nWhich method should be used to meet this requirement?\n",
      "options": [
        "Build a segment using data from REST API call\n",
        "Create pages by binding the data for each item using the draft page template and custom data retrieval logic.\n",
        "Create Experience Fragments by bindings the data for each item using the draft page template and custom data retrieval logic.\n",
        "Create Content Fragments by binding the data for each item using the draft page template and custom data retrieval logic.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/assets/extending/assets-api-content-fragments.html?lang=en#extending "
    },
    {
      "title": "A developer has built a dropdown containing each of the fifty U.S states as a static option. The dialog node is called states. A new requirement is asking to use that same dropdown in another component´s dialog.\nWhich method would be a more modular approach to the solution?\n",
      "options": [
        "1. Extrapolate out the states node to a more generic location.\n2. Set that new location as the resourceSuperType\n",
        "1. Extrapolate out the states node to a more generic location.\n2. Use granite:include in both components bring in only what is needed.\n",
        "Copy and paste the entire state node from the old component to the new one.\n",
        "Copy and paste only the options from the old component to the new one.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/platform/sling-resource-merger.html?lang=en#purpose "
    },
    {
      "title": " A developed identifies that some requests for the page /content/sampleproject/page.html take long than other request for the same page. Refer to the $DOCROOT/content/sampleproject directory below.\n[user@gropu /opt/dispatcher/cache/content/sampleproject ] $ ls –la\nTotal 2\ndrwxr-xr-x. 5 apache apache 4096 Feb 11 11:41 .\ndrwxr-xr-x. 3 apache apache 4096 Nov 29 16:07 ..\ndrwxr-xr-x. 4 apache apache 4096 Feb 7 03:21 page.html\n-rw-r—r--.  1 apache apache 0 Feb 7 03:19 .stat\nThe dispatcher.log file contains the following lines:\n[Wed Feb 13 13:14:04 2012] [D] [1376(1532)] checking [/libs/cq/security/userinfo.json]\n[Wed Feb 13 13:14:04 2012] [D] [1376(1532)] Caching disabled due to query string: tracking_id=1350373444666\n[Wed Feb 13 13:14:04 2012] [D] [1376(1532)] cache-action for [/libs/cq/security/userinfo.json]: NONE\nHow should the developer make sure that the page is always cached?\n",
      "options": [
        "Modify the dispatcher.any file to contains the following lines:\n/rules\n{\n…\n/0000 {/glob “*” /type “allow” /params “tracking_id” }\n…\n}\n",
        "Modify the dispatcher.any file to contains the following lines:\n/filter\n{\n…\n/0023 { /type “allow” /url “/content//.html” /params “tracking_id” }\n…\n}\n",
        "Modify the dispatcher.any file to contains the following lines:\n/ignoreUrlParams\n{\n…\n/0002 { /glob “tracking_id”   /type “allow” }\n…\n}\n",
        "Modify the dispatcher.any file to contains the following lines:\n/filter\n{\n…\n/0023 {  /type “allow”  /url “/content//.html?tracking_id=*” }\n…\n}\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration.html?lang=en#ignoring-url-parameters "
    },
    {
      "title": "AEM recommends a team to upgrade AEM servers with In-place Upgrade because the existing versions has reached EOL.\nWhat are two disadvantages of perfoming in a In-place Upgrade to the latest version of AEM? (Choose two.)\n \n",
      "options": [
        "ACLs, users, and groups are lost.\n",
        "Content migration is required.\n",
        "Complex developer setup and automation of the upgrade process.\n",
        "Content revision history is not preserved.\n",
        "Depending on the version difference between the old and new instances, the upgrade can be a long and aduous process.\n"
      ],
      "answers": [
        "C",
        "E"
      ],
      "docs": "https://www.bounteous.com/insights/2018/08/30/aem-upgrades-quick-guide-minimize-your-risk/"
    },
    {
      "title": " A company wants to reuse content with several multi-nacional same-language sites and decides to use MSM in AEM. This allows the core content to be re-used, while allowing for nacional variations.\nWhat is the recommended MSM design for the wesite?\n",
      "options": [
        "/content\n  l– we.retail\n        l- live-copy\n             l- en\n  l– we.retail\n         l- us\n              l- en\n  l– we.retail\n         l- gb\n              l- en\n  l– we.retail\n          l- ca\n              l- en\n  \n",
        "/content\n  l– we.retail\n          l- language-masters\n               l- en\n  l– we.retail\n         l- us\n               l- en\n  l– we.retail\n          l- gb\n               l- en\n  l– we.retail\n         l- ca\n               l- en\nl– we.retail\n         l- au\n               l- en\n  \n",
        "/content\n   l– we.retail\n      l- en\n               l- us\n               l- gb\n       l- fr\n               l- fr\n               l- ca\n   \n",
        "/content\n   l– we.retail1\n      l- en\n   l– we.retail2\n      l- en\n   l– we.retail3\n      l- en\n   l– we.retail4\n      l- en\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/introduction/tc-bp.html?lang=en#site-structure "
    },
    {
      "title": "A customer is having trouble with some search queries and provides the following information:\n- The logs show the following warning occurs many times: *WAR* Traversed 1000 nodes with filter Filter(query=select …)\n- The client has more than 100,000 pages stored in their AEM instance.\n- The client uses a custom page property to help search for pages of a given type.\nWhat should the AEM Developer do to help resolve client´s issue?\n",
      "options": [
        "Advise the client to reorganize their content by having nodes of no more than 10,000.\n",
        "Create a custom oak index the custom page property.\n",
        "Set the reindex flag to true for node ‘oak:index/cqPageLucene’.\n",
        "Use the Index Manager to validate the ‘cqPageLucene’ index is enabled.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/deploying/deploying/queries-and-indexing.html?lang=en#configuring-the-indexes"
    },
    {
      "title": "Which type of configuration can be created in OSGI Configuration Manager?\n",
      "options": [
        "Bundles Configuration\n",
        "Run modes Configuration\n",
        "Components Configuration\n",
        "Service Configuration\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/deploying/configuring/configuring-osgi.html?lang=en#osgi-configuration-with-the-web-console "
    },
    {
      "title": "While working with Editable Templates, the author reports that the changes that the author makes are lost periodically.\nWhat should the AEM Developer fix to prevent losing author updates?\n",
      "options": [
        "Set mode to be “merge” in the filter.xml\n",
        "Move the affected Editable template to /etc/templates\n",
        "Move the affected Editable template to /apps/templates\n",
        "Set mode to be “update” in the filter.xml\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/pages-templates.html?lang=en"
    },
    {
      "title": "An AEM server is overloaded with too many concurrently running workflows. The developer decides to reduce the number of concurrent workflows.\nWhat should be configured to reduce the number of concurrent workflows?\n",
      "options": [
        "The number of threads in Scheluder\n",
        "Maximum Parallel Jobs in OSGI console\n",
        "The number of threads in Apache Felix Jetty Http Service\n",
        "Launchers for each workflow\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/extending-aem/extending-workflows/workflows-best-practices.html?lang=en#tuning-dam-workflows"
    },
    {
      "title": "An AEM application development team is assigned a task to create an Event-Driven Data Layer implementation for a Analytics solution.\nWhich Adobe recommended best practice should the developer choose?\n",
      "options": [
        "Create an Adobe Cloud Service configuration to use third-party tool´s data layer\n",
        "Create a custom data layer and add each component, template, and its properties to the data layer\n",
        "Use Adobe Experience Platform´s data layer to integrate with AEM\n",
        "Use Adobe Client Data Layer and integrate with Core components\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/sites/integrations/adobe-client-data-layer/data-layer-overview.html?lang=en#integrations"
    },
    {
      "title": "An AEM Developer sets an argument variable “myVariable” to be consumed by workflow process in the same workflow model definition.\nWhich approach should be used?\n",
      "options": [
        "//Get myVariable directly from MetaDataMap \nString myVariable = workItem.getMetaDataMap().get(“myVariable”);\n",
        "//Get myVariable from HistoryItem object \nList<HistoryItem> history = workflowSession.getHistory(workItem.getWorkflow());\n",
        "//Get myVariable from WorkflowData\nString myVariable = workItem.getWorkflowData().getPayload().toString();\n",
        "//Get myVariable from args\nString args = metadataMap.get(“PROCESS_ARGS”,String.class);\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/extending-aem/extending-workflows/using-variables-in-aem-workflows.html?lang=en#workflow-steps-without-support-for-variables"
    },
    {
      "title": "A developer wants to consume AEM Page Data in a Single Page Application. The Single Page Application is coded to understand JSON format. Only page content should be exposed through JSON. All the existing components are based on foundation components.\nWhich change should the developer make in the existing components to support this requirement?\n",
      "options": [
        "Implement a Sling Model Exporter for the components\n",
        "Invoke the page URL with the extension .json to get the values to construct the required output\n",
        "Create a custom sling event handler to handle JSON requests\n",
        "Add JSON as the default extension in Apache Sling Servlet/Script Resolver and Error Handler Configuration\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-64/developing/headless/spas/spa-overview.html?lang=en#authoring-workflow "
    },
    {
      "title": "An AEM Developer sets up an AEM project using the AEM Archetype. The build fails on its first run of mvn install due to depenrencies not found.\n What are the two most likely causes?(Choose Two)\n",
      "options": [
        "There is no adobe-public profile configured in settings.xml\n",
        "The .m2 repository has outdated dependencies\n",
        "The adobe-public profile dependencies are no present in the .m2 repository\n",
        "The build command requires at least one profile\n",
        "The developer did not add the adobe-public profile to the build command\n"
      ],
      "answers": [
        "A",
        "E"
      ],
      "docs": "No tenenemos link "
    },
    {
      "title": "An AEM developer is tasked to configure SAML setup in AEM. The integration worked fine in lower environments but not in the PROD environment. What configuration did the developer miss in PROD\n",
      "options": [
        "Sling Referrer Filter is configured with localhost insted of IDP \n",
        "Adobe Granite SSO Authentication is not configured.\n",
        "Adobe Granite CSRF Filter is configured with localhost instead of IDP\n",
        "Adobe Jackrabbit OAK Default Sync Handler is not configured.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/administering/security/saml-2-0-authenticationhandler.html?mt=false"
    },
    {
      "title": "An AEM developer is tasked to make an existing AEM website content to be consumable by other channels.\n What methods would allow for this to occur?\n",
      "options": [
        "Update the existing Sling Models to expose the fields in the default JSON format. \n",
        "Create an additional replication agent to push the content in an external system that\n the other channels can query.\n",
        "Migrate the site structure and components to use content fragments and experience \nfragments\n",
        "Create additional Sling Models for each component to support the preferred JSON.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "-\thttps://experienceleague.adobe.com/docs/experience-manager-64/developing/components/json-exporter.html?lang=en"
    },
    {
      "title": "An application requires custom languages to be supported that are not present in AEM OOB\nWich approach is recommended?\n",
      "options": [
        "Add the custom languages in the website´s content pages. \n",
        "Override /libs/wcm/core/resources/languages and add custom languages.\n",
        "Overlay /libs/wcm/core/resources/languages and add custom languages\n",
        "Add the custom languages in AEM projects.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "-  https://aem4beginner.blogspot.com/add-custom-language-in-aem-65 "
    },
    {
      "title": "Wich attribute must be present in all filter rules in AEM dispatcher configuration?\n",
      "options": [
        "/url. \n",
        "/type.\n",
        "/glob\n",
        "/selectors.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "Wich practice should be used to push a code fox to make it into the current release candidate\n",
      "options": [
        "Make the fix in CRX where the current release candidate is currently deployed. \n",
        "Cherry-pick the fix commit into the release candidate.\n",
        "Make the fix locally and upload the package to where the release candidate is dpeloyed\n",
        "Cut a new release candidate from the mas branch.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "An AEM developer is assigned a task to design a workflow. The workflow is supposed to collect data from the participant and then determine the reviwer/approver branch to proceed further\nWich workflow step should be used by the developer?\n",
      "options": [
        "Workflow Initiator Participant Chooser. \n",
        "Form Participant Step.\n",
        "Dynamic Participant Step\n",
        "Dialog Participant Step.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "What is the default value for AC Handling when creating packages?\n",
      "options": [
        "MergePerserve. \n",
        "Ignore.\n",
        "Merge.\n",
        "Ovewrite.\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "The following anchor tag is not resolving:\n<a href='${item.path}'>${item.name}</a>\nUpon further inspection the developer notices that the link has no .html appended to the end of the URL.\nWhat could be a potential fix for the issue?\n",
      "options": [
        "<a href=\"${item.path} @ context = \"html\">${item.name}</a>. \n",
        "<a href=\"${item.path} @ append = \"html\">${item.name}</a>. \n",
        "<a href=\"${item.path} @ extenion = \"html\">${item.name}</a>. \n",
        "<a href=\"${item.path} @ context = \"unsafe,fragment=item.name\">${item.name}</a>. \n"
      ],
      "answers": [
        "C"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "A developer needs to create a component with the following requirements\nThe component must be configurable, the component shloud be editable, NOT removable an author should be unable to add the component to a packages through design mode\nWich node structure should the developer use to meet these requirements?\n",
      "options": [
        "component\n\t- jcr:primaryType=\"cq:Component\"\n\t- jcr:title=\"Component\"\n\t- componentGroup=\".hidden\"\n\t- cq:dialog\n\t...\n\t- cq:editConfig\n\t- cq:actions = \"[edit]\"",
        "component\n\t- jcr:primaryType=\"cq:Component\"\n\t- jcr:title=\"Component\"\n\t- hidden=\"true\"\n\t- cq:dialog\n\t...\n\t- cq:editConfig\n\t- cq:actions = \"[edit]\"",
        "component\n\t- jcr:primaryType=\"cq:Component\"\n\t- jcr:title=\"Component\"\n\t- componentGroup=\".hidden\"\n\t- cq:actions = \"[edit]\"\n\t...\n\t- cq:dialog\n\t...",
        "component\n\t- jcr:primaryType=\"cq:Component\"\n\t- jcr:title=\"Component\"\n\t- cq:actions = \"[edit]\"\n\t- cq:dialog\n\t..."
      ],
      "answers": [
        "A"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "After defining a Sling Model, what step is required to enable JSON export on any component?\n",
      "options": [
        "Use Sling Resource Merger. \n",
        "FCreate an OSGI configuration.\n",
        "Install Jackson library in AEM\n",
        "Annotate the Sling Model interface.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "A developer has as component named 'foobar' with the following file:foobar.html\n<div data-one='${'foo'}' data-two='${2}' data-three='${true}'></div><div data-one='${''}' data-two='${0}' data-three='${false}'></div>\nWhat is the output when the component is rendered?\n",
      "options": [
        "<div data-one=\"foo\" data-two=\"2\" data-three=\"true\"></div>.<div data-one=\"\" data-two=\"0\" data-three=\"false\"></div> \n",
        "<div data-one=\"foo\" data-two=2 data-three=\"\"></div><div data-one=\"\" data-two=0 data-three=\"\"></div> \n",
        "<div data-one=\"foo\" data-two=\"2\" data-three></div><div data-two=\"0\"></div> \n",
        "<div data-one=\"foo\" data-two=2 data-three=\"\"></div><div data-two=0 data-three=\"\"></div> \n"
      ],
      "answers": [
        "C"
      ],
      "docs": "- We don´t have link"
    },
    {
      "title": "An AEM developer wants to display localized page names to users of translated content. Rather than having a Spanish-speaking user navigate to: www.mydomain.com/es/home.html, the developer wants the URL to be: www.mydomain.com/es/casa.html. What is the recommended way of achieving this?",
      "options": [
        "Add a property sling:alias = casa to /es/home\n",
        "Write a Bin Servlet to handle the request - @SlingServlet(paths = \"/bin/myApp/myServlet\"\n",
        "Modify /etc/map to resolve the URL .../es/casa\n",
        "Use Vanity URL to redirect .../es/casa to es/home\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://stackoverflow.com/questions/36147341/slingalias-vs-vanityurl-in-aem"
    },
    {
      "title": "A user reports that requests are slow on AEM instance. The infrastructure team vierifies that everything is normal using third-party monitoring solution. Which internal AEM metrics should be checked to find out the issue?",
      "options": [
        "Thread performance\n",
        "Query performance\n",
        "Request performance\n",
        "Queue performance\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "You can inspect the Request Performance log in the Operations Dashboard. This tool can be used to identify slow page requests: https://github.com/AdobeDocs/experience-manager-64.en/blob/master/help/sites-deploying/best-practices-for-performance-testing.md"
    },
    {
      "title": "A project has a requierement to extend to WCM Core component consisting of Image. The requirements is also to add Title, Description, Link and display the titles of a few pages by links. How should a developer proceed?",
      "options": [
        "1. Extend Teaser from Core components. 2. Customized it to add the Titles by tags\n",
        "1. Extend Image form Core Components. 2. Add an HTL Template for Title extended Core Components 3. Add an HTL Template for List extended Core Components. 4. Add a reference to Title and List Components Dialog Box.\n",
        "1. Extend Teaser from Core Components. 2. Add an HTL Template for List extended Core Components. 3. Add a reference to List Component Dialog box.\n",
        "Create a custom component as per the requirements\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-core-components/using/components/teaser.html?lang=en"
    },
    {
      "title": "When will a page be cached using ignoreUrlParams configuration in dispatcher?",
      "options": [
        "/0001 { /glob \"q\" /type \"deny\" } allows the URL with parameter \"q\" to be cached\n",
        "When a request URL contains a suffix to be cached, the page is cached\n",
        "When a request URL contains one of the parameters is ignored, the page is cached\n",
        "When a request URL contains parameters that are all ignored, the page is cached\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration.html?lang=en"
    },
    {
      "title": "A developer is tasked with removing a user from a group on the LDAP server. What is a way to determine if the process was implemented correctly?",
      "options": [
        "The change will also be reflected on the AEM side upon syncronization\n",
        "The change will also be reflected on the AEM side straight away\n",
        "The user must be removed in AEM before it is remoeved from LDAP\n",
        "The group must be syncronized with AEM before the user is removed\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "If a user is removed from a group on the LDAP server, the change will also be reflected on the AEM side upon synchronization: https://helpx.adobe.com/ca/experience-manager/6-3/sites/administering/using/ldap-config.html"
    },
    {
      "title": "A developer tried to update a content fragment variation using Assets HTTP API but it didn't work as expected: POST /{cfParentPath}/{cfName}. What could be the potential root cause?",
      "options": [
        "The service user doesnt have appropiate WRITE permissions\n",
        "Assets API doesnt support UPDATE operation\n",
        "Asset API doesnt support WRITE operations for content fragment variations\n",
        "The developer needs must use PUT method instead of POST\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/assets/extending/mac-api-assets.html?lang=en"
    },
    {
      "title": "Which property of dispatcher configuration allows some custom HTTP headers to be passed from a client browser to an AEM instance?",
      "options": [
        "/httpheaders\n",
        "/clientsheaders\n",
        "/headers\n",
        "/passthroughheaders\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration.html?lang=en"
    },
    {
      "title": "A developer needs to retrieve a calculated property from a page in a JobConsumer. The model below has the logic to calculate this property. A first attempt to execute resource.adaptTo(ArticlePage.class) in the JobConsumer fails.\n@Model(adaptables = SlingHttpServletRequest.class, adapters = {ArticlePage.class, Page.class}, resourceType = ArticlePageImpl.RESOURCETYPE)\n@Exporter(name = ExporterConstants.SLINGMODELEXPORTERNAME, extensions = ExporterConstants.SLINGMODELEXTENSION)\npublic class ArticlePageImpl implements ArticlePage {\n@Self\nprotected SlingHttpServletRequest request;\n@ScriptVariable\nprivate Page currentPage;\n...\n@Override\npublic String calculatedProperty() {\n...\n}\n}\nWhat should the developer do?",
      "options": [
        "Create a new model with annotation to @Model(adaptables = Resource.class, adapters = {ArticlePage.class, Page.class}, resourceType = ArticlePageImpl.RESOURCE_TYPE}\n",
        "Update the model annotation to @Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, adapters = {ArticlePage.class, Page.class}, resourceType = ArticlePageImpl.RESOURCE_TYPE}\n",
        "Execute resource.adaptto(Page.class) in the JobConsumer class\n",
        "Create a mock request and execute request.adaptTo(Page.class) in the JobConsumer class\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "-"
    },
    {
      "title": "What are two limitations of an AEM full SPA implementation with frontend routing? (Choose two)",
      "options": [
        "Cannot generate a true 404 response for dynamically generated pages\n",
        "Cannot generate sitemaps\n",
        "Metadata must be stored in two locations: app and page\n",
        "Cannot mix SPA components with AEM components\n",
        "Cannot extend WCM Core components\n"
      ],
      "answers": [
        "B",
        "D"
      ],
      "docs": "https://thegray.company/blog/single-page-application-spas-404s-seo\nhttps://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/sitemap-for-spa-sites-with-aem-spa-implementation/qaq-p/374668"
    },
    {
      "title": "AEM SPA integration provides various design models. In an application the developer chooses to use AEM as a headless CMS without using the SPA\n Editor SDK framework \n What would be an advantage for this design model?\n",
      "options": [
        "The content author can edit the app using AEM's content authoring experience. \n",
        "The front end developer has full control over the app\n",
        "The SPA is compatible with the template editor.\n",
        "The developer keeps control over the app by only enabling authoring in restricted areas of the app\n"
      ],
      "answers": [
        "B"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-65/developing/headless/spas/spa-architecture.html?lang=en"
    },
    {
      "title": "An AEM Developer needs to migrate to AEM as a Cloud Service from AEM version 6.4. The AEM Developer is not able to run the Cloud Readiness\n Analyzer.\n What is preventing the Cloud Readiness Analizer from running?\n",
      "options": [
        "Cloud Readiness Analyzer should run on Publisher instad of Author instance.\n",
        "Cloud Readiness Analyzer is not running on a Stage environment. \n",
        "Cloud Readiness Analyzer is not supported on AEM version 6.4\n",
        "The AEM Developer is not an admin or does not have administrator rights.\n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/aem-using-cloud-readiness-analyzer-aem-community-blog-seeding/td-p/367805"
    },
    {
      "title": "An AEM application is expected to export a content fragment in JSON format as is without any customization for a headless implementation.\n What's the recommended approach for same? \n",
      "options": [
        "Use Sling Exporter framework\n",
        "Use Core components to export JSON \n",
        "Write Custom sling Models to export the fragments.\n",
        "Use AEM Assets HTTP API \n"
      ],
      "answers": [
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/sites/content-fragments/content-fragments-delivery-feature-video-use.html?lang=en"
    },
    {
      "title": "An AEM Developer needs to create a new component to help support a new product launch.\n-The client is on AEM 6.5 on-premise with the latest version of WCM Core Components.\n-The component must include text, image, and a link.\n-The component must support multiple designs.\nWhich process should the AEM Developer use to support the launch?",
      "options": [
        "1. Extend the Teaser Component from Core Components\n2. Create style variations to be used in the Style System.\n",
        "1. Create a new Image with Text component that exposes the Core Components authoring dialogs for those components.\n2. Add a policy to define which designs are used.\n",
        "1. Extend the Text Component from Core Components.\n2. Enable image manipulations for the Text Component via policy.\n",
        "1. Create a new component by extending thE Text Component from Core Components.\n2. Add dialog properties and modify HTL to support images.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-core-components/using/components/teaser.html?lang=en"
    },
    {
      "title": "What two types of testing are available OOB in AEM Cloud Manager Pipeline? (Choose two)",
      "options": [
        "Penetration testing.\n",
        "Integration testing.\n",
        "Code Quality testing.\n",
        "Performance testing.\n",
        "UI testing.\n"
      ],
      "answers": [
        "C",
        "D"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-cloud-manager/using/how-to-use/understand-your-test-results.html?lang=en "
    },
    {
      "title": "A developer needs guiadance to create mock for unit testing code.\nWhich of the following code snipper would result in a successful test?",
      "options": [
        "@Test\n   public void initialize() throws LoginException {\n      request = new SlingHttpServletRequest();\n      response = new SlingHttpServletResponse();\n   }\n   @Test\n   public void postSuccessReturns200() throws LoginException, IOException {\n      // do something\n      when(mockMetadata.httpStatusCode()).thenReturn(200);\n   }\n",
        "@BeforeClass\n   public void initialize() throws LoginException {\n      request = new MockSlingHttpServletRequest(resolver);\n      response = new MockSlingHttpServletResponse();\n   }\n   @Test\n   public void postSuccessReturns200() throws LoginException, IOException {\n      // do something\n      when(mockMetadata.httpStatusCode()).thenReturn(200);\n   }\n",
        "@Before\n   public void initialize() throws LoginException {\n      request = new MockSlingHttpServletRequest(resolver);\n      response = new MockSlingHttpServletResponse();\n   }\n   @Test\n   public void postSuccessReturns200() throws LoginException, IOException {\n      // do something\n      when(mockMetadata.httpStatusCode()).thenReturn(200);\n   }\n",
        "@Before\n   public void initialize() throws LoginException {\n      //initialize something\n   }\n   @After\n   public void postSuccessReturns200() throws LoginException, IOException {\n      request = new SlingHttpServletRequest(resolver);\n      response = new SlingHttpServletResponse();\n      // do something\n      when(mockMetadata.httpStatusCode()).thenReturn(200);\n   }\n"
      ],
      "answers": [
        "C"
      ],
      "docs": ""
    },
    {
      "title": "Which two unit testing dependencies are generated by AEM archetype? (Choose two.)",
      "options": [
        "Mockito.\n",
        "Hobbes.\n",
        "JUnit\n",
        "Selenium.\n",
        "PowerMock.\n"
      ],
      "answers": [
        "A",
        "C"
      ],
      "docs": "https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/project-archetype/unit-testing.html?lang=en"
    },
    {
      "title": "If multiple configurations for the same PID are applicable, which configuration is applied?",
      "options": [
        "The configuration with the highest number of matching run modes is applied.\n",
        "The one that occurs first in the repository is applied.\n",
        "A configuration factory is created and all configurations are applied.\n",
        "The last modified configuration is applied.\n"
      ],
      "answers": [
        "A"
      ],
      "docs": "https://helpx.adobe.com/experience-manager/6-3/sites/deploying/using/configuring-osgi.html"
    },
    {
      "title": "A company is building an AEM application with a third party jar file. The third party APIs connect to an external app and pulls the data.\nThe third party keeps updating with features and fixes.\nWhich method should be used to integrate this jar file?",
      "options": [
        "Convert the jar file into zip and install using a package manager.\n",
        "Install the jar file using a package manager.\n",
        "Create a bundle with the jar embedded as a dependency.\n",
        "Upload the jar file into DAM assets.\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/how-to-convert-third-party-jar-files-into-bundles/qaq-p/240857"
    },
    {
      "title": "An AEM Developer wants to display localized page names to users of translated content.\nRather than having a Spanish-speaking user navigate to: www.mydomain.com/es/home.html The Developer wants the URL to be: www.mydomain.com/es/casa.html\nWhat is the recommended way of achieving this?",
      "options": [
        "Add a property sling:alias = casa to ../es/home\n",
        "Write a Bin Servlet to handle the request - @SlingServlet(paths = '/bin/myApp/myServlet'...\n",
        "Modify /etc/map to resolve the URL .../es/casa\n",
        "Use Vanity URL to redirect .../es/casa to .../es/home\n"
      ],
      "answers": [
        "C"
      ],
      "docs": "https://stackoverflow.com/questions/36147341/slingalias-vs-vanityurl-in-aem"
    }
  ]